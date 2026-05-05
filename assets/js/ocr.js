/* Vesile Sigorta — Ruhsat OCR (Tesseract.js)
 * 4-yön rotation: 0/90/180/270 dener, en yüksek skoru seçer.
 * Görüntü ön-işleme: scale + grayscale + kontrast.
 * Tüm işlem tarayıcıda; hiçbir veri sunucuya gönderilmez.
 */
(function () {
  'use strict';

  const qRuhsat = document.getElementById('qRuhsat');
  const ocrStatus = document.getElementById('ocrStatus');
  const fileLabel = document.querySelector('.file-label');
  const fileLabelText = document.getElementById('fileLabelText');

  if (!qRuhsat || typeof Tesseract === 'undefined') return;

  function setOcrStatus(html, kind) {
    if (!ocrStatus) return;
    ocrStatus.style.display = '';
    ocrStatus.className = 'ocr-status' + (kind ? ' ' + kind : '');
    ocrStatus.innerHTML = html;
  }
  function clearOcrStatus() {
    if (!ocrStatus) return;
    ocrStatus.style.display = 'none';
    ocrStatus.innerHTML = '';
  }

  // ---- Image preprocessing: scale + grayscale + contrast ----
  function preprocessToCanvas(img, rotateDeg) {
    const maxW = 1600;
    const scale = Math.min(1, maxW / Math.max(img.width, img.height));
    const w = Math.round(img.width * scale);
    const h = Math.round(img.height * scale);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (rotateDeg === 90 || rotateDeg === 270) {
      canvas.width = h;
      canvas.height = w;
    } else {
      canvas.width = w;
      canvas.height = h;
    }
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotateDeg * Math.PI) / 180);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();

    // grayscale + contrast
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = data.data;
    for (let i = 0; i < d.length; i += 4) {
      const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      const c = Math.max(0, Math.min(255, (g - 128) * 1.4 + 128));
      d[i] = d[i + 1] = d[i + 2] = c;
    }
    ctx.putImageData(data, 0, 0);
    return canvas;
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve) =>
      canvas.toBlob((b) => resolve(b), 'image/jpeg', 0.92)
    );
  }

  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  // ---- Ruhsat-specific scoring: how "ruhsat-like" is this OCR text? ----
  // Higher = better orientation guess.
  function scoreRuhsatText(text) {
    if (!text) return 0;
    const T = text.toUpperCase();
    let score = 0;
    // Distinctive Turkish ruhsat keywords
    const keywords = [
      'PLAKA', 'TESCIL', 'TESCİL', 'RUHSAT', 'MOTORLU', 'TAŞIT',
      'MARKA', 'MODEL', 'TIPI', 'TİPİ', 'ADRES', 'KIMLIK', 'KİMLİK',
      'VERGI', 'VERGİ', 'SOYAD', 'NOTER', 'BELGE', 'SERI', 'SERİ',
    ];
    keywords.forEach((k) => {
      if (T.indexOf(k) !== -1) score += 3;
    });
    // Plaka pattern hits
    const plateHits = (T.match(/\b\d{2}\s?[A-Z]{1,3}\s?\d{2,4}\b/g) || []).length;
    score += plateHits * 4;
    // Long-digit (tescil sıra no, 17 hane)
    if (/\b20\d{15}\b/.test(T)) score += 6;
    // C.1.1 / C.1.2 etiketleri
    const labelHits = (T.match(/C\.?\s*1\.?\s*[123]/g) || []).length;
    score += labelHits * 2;
    // Penalize gibberish: ratio of weird symbols
    const weird = (T.match(/[^A-Z0-9ÇĞİÖŞÜ\s\.\,\-\:\(\)\|\/]/g) || []).length;
    score -= Math.min(10, weird * 0.2);
    // Reward reasonable text length (very short = nothing read)
    if (T.length > 200) score += 2;
    if (T.length > 500) score += 2;
    return score;
  }

  // ---- Field extraction ----
  function parseRuhsat(rawText) {
    const text = rawText
      .replace(/\r/g, '')
      .replace(/[İIıi]/g, 'I')
      .toUpperCase();
    const lines = text
      .split('\n')
      .map((l) => l.replace(/\s+/g, ' ').trim())
      .filter(Boolean);

    const result = { plate: null, tc: null, sira: null, name: null, surname: null, address: null };

    // PLAKA
    const plateAfter = text.match(/PLAKA[^\d]{0,30}(\d{2})\s?([A-Z]{1,3})\s?(\d{2,4})/);
    if (plateAfter) {
      result.plate = plateAfter[1] + ' ' + plateAfter[2] + ' ' + plateAfter[3];
    } else {
      const m = text.match(/\b(\d{2})\s?([A-ZÇĞİÖŞÜ]{1,3})\s?(\d{2,4})\b/);
      if (m) result.plate = m[1] + ' ' + m[2] + ' ' + m[3];
    }

    // TESCIL SIRA NO — 17 hane, 20 ile başlar
    const siraMatch = text.match(/\b(20\d{15})\b/);
    if (siraMatch) result.sira = siraMatch[1];

    // TC KIMLIK / VERGI NO — etiket yakınında 10-11 hane
    const tcLabel = text.match(/(?:KIMLIK|VERGI)\s*NO[\s\S]{0,40}?\b(\d{10,11})\b/);
    if (tcLabel) {
      result.tc = tcLabel[1];
    } else {
      const all11 = [...text.matchAll(/\b(\d{11})\b/g)]
        .map((x) => x[1])
        .filter((n) => !n.startsWith('20'));
      if (all11.length) result.tc = all11[0];
      else {
        const all10 = [...text.matchAll(/\b(\d{10})\b/g)]
          .map((x) => x[1])
          .filter((n) => !n.startsWith('20'));
        if (all10.length) result.tc = all10[0];
      }
    }

    // SOYADI / ADI — C.1.1 / C.1.2 etiketleri
    function findAfterLabel(labelRe, stopRe) {
      const idx = lines.findIndex((l) => labelRe.test(l));
      if (idx === -1) return null;
      const same = lines[idx].replace(labelRe, '').replace(/^[\s:|.]+/, '').trim();
      if (same && !stopRe.test(same) && same.length > 1 && same.length < 50) return same;
      for (let j = idx + 1; j < Math.min(idx + 3, lines.length); j++) {
        const v = lines[j].trim();
        if (v && !stopRe.test(v) && v.length > 1 && v.length < 50) return v;
      }
      return null;
    }
    const stopLabels = /\(?[A-Z]\.?\d|TICARI|UNVANI|ADRESI|KIMLIK|VERGI|TESCIL|PLAKA|MARKASI/;
    const sur = findAfterLabel(/\(?C\.?\s*1\.?\s*1\)?\s*SOYADI?[^A-Z]*/i, stopLabels);
    const adi = findAfterLabel(/\(?C\.?\s*1\.?\s*2\)?\s*ADI?[^A-Z]*/i, stopLabels);
    if (sur) result.surname = sur.replace(/[^A-ZÇĞİÖŞÜ\s]/g, '').trim();
    if (adi) result.name = adi.replace(/[^A-ZÇĞİÖŞÜ\s]/g, '').trim();

    const addr = findAfterLabel(/\(?C\.?\s*1\.?\s*3\)?\s*ADRESI?[^A-Z]*/i, /\(?Z\.?\d|NOTER|BELGE|SERI/);
    if (addr) result.address = addr;

    return result;
  }

  // ---- Quick orientation probe: low-resolution OCR on each rotation, pick the best ----
  async function detectOrientation(img, worker, onProgress) {
    const rotations = [0, 90, 180, 270];
    const results = [];

    // Downscale further for the probe pass to keep it fast
    function makeProbe(rotateDeg) {
      const probeMaxW = 900;
      const scale = Math.min(1, probeMaxW / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (rotateDeg === 90 || rotateDeg === 270) {
        canvas.width = h;
        canvas.height = w;
      } else {
        canvas.width = w;
        canvas.height = h;
      }
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotateDeg * Math.PI) / 180);
      ctx.drawImage(img, -w / 2, -h / 2, w, h);
      ctx.restore();
      // Light grayscale + contrast
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = data.data;
      for (let i = 0; i < d.length; i += 4) {
        const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
        d[i] = d[i + 1] = d[i + 2] = g;
      }
      ctx.putImageData(data, 0, 0);
      return canvas;
    }

    for (let i = 0; i < rotations.length; i++) {
      const deg = rotations[i];
      const probe = makeProbe(deg);
      const blob = await canvasToBlob(probe);
      const { data: { text } } = await worker.recognize(blob);
      const score = scoreRuhsatText(text);
      results.push({ deg, score, text });
      if (onProgress) onProgress(i + 1, rotations.length);
    }
    results.sort((a, b) => b.score - a.score);
    return results[0]; // best { deg, score, text }
  }

  // ---- Main flow ----
  let ocrInFlight = false;
  qRuhsat.addEventListener('change', async () => {
    if (!qRuhsat.files || !qRuhsat.files[0]) {
      clearOcrStatus();
      return;
    }
    if (ocrInFlight) return;
    ocrInFlight = true;

    setOcrStatus(
      '<div class="spinner"></div><div style="flex:1;"><strong>Ruhsat okunuyor...</strong> Yön tespiti + tarama, 15-40 saniye sürebilir. Bilgileriniz cihazınızdan ayrılmaz.<div class="progress-bar" style="margin-top:8px;"><div id="ocrProgress"></div></div><div id="ocrStage" style="font-size:12px;opacity:.75;margin-top:4px;">Hazırlanıyor...</div></div>'
    );

    const stageEl = () => document.getElementById('ocrStage');
    const barEl = () => document.getElementById('ocrProgress');
    const setStage = (txt) => { const e = stageEl(); if (e) e.textContent = txt; };
    const setBar = (pct) => { const e = barEl(); if (e) e.style.width = pct + '%'; };

    let worker = null;
    try {
      const file = qRuhsat.files[0];
      setStage('Görüntü yükleniyor...');
      const img = await loadImage(file);

      setStage('OCR motoru hazırlanıyor...');
      worker = await Tesseract.createWorker('tur+eng', 1, {
        logger: () => {},
      });

      // 1) Orientation probe (4 rotations, low-res)
      setStage('Yön tespit ediliyor (1/4)...');
      const best = await detectOrientation(img, worker, (i, n) => {
        setStage(`Yön tespit ediliyor (${i}/${n})...`);
        setBar((i / n) * 30); // 0-30%
      });

      // 2) Full-resolution recognition at the chosen rotation
      setStage(
        best.deg === 0
          ? 'Tam çözünürlükte taranıyor...'
          : `${best.deg}° döndürülüp tam çözünürlükte taranıyor...`
      );
      setBar(35);
      const fullCanvas = preprocessToCanvas(img, best.deg);
      const fullBlob = await canvasToBlob(fullCanvas);

      // Re-init the logger so we can show recognition progress 35→100%
      await worker.terminate();
      worker = await Tesseract.createWorker('tur+eng', 1, {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            setBar(35 + Math.round(m.progress * 65));
          }
        },
      });
      const { data: { text: fullText } } = await worker.recognize(fullBlob);
      await worker.terminate();
      worker = null;

      // Pick whichever text scored higher: probe-best or full-res
      const finalText =
        scoreRuhsatText(fullText) >= best.score ? fullText : best.text;

      const parsed = parseRuhsat(finalText);

      // Fill empty fields only
      const filled = [];
      const fields = [
        { id: 'qPlate', val: parsed.plate, label: 'Plaka' },
        { id: 'qTescil', val: parsed.sira, label: 'Tescil Sıra No' },
        { id: 'qTC', val: parsed.tc, label: 'TC/Vergi No' },
        {
          id: 'qName',
          val:
            parsed.name || parsed.surname
              ? [(parsed.name || '').trim(), (parsed.surname || '').trim()]
                  .filter(Boolean)
                  .join(' ')
              : null,
          label: 'Ad Soyad',
        },
      ];
      fields.forEach((f) => {
        if (f.val) {
          const el = document.getElementById(f.id);
          if (el && !el.value.trim()) {
            el.value = f.val;
            filled.push(f.label);
            el.style.background = 'rgba(37,211,102,0.08)';
            el.style.borderColor = '#7dd5a3';
            setTimeout(() => {
              el.style.background = '';
              el.style.borderColor = '';
            }, 4000);
          }
        }
      });

      const rotNote =
        best.deg !== 0
          ? ` <span style="opacity:.75;">(${best.deg}° döndürüldü)</span>`
          : '';

      if (filled.length === 0) {
        setOcrStatus(
          `<div style="font-size:18px;">⚠️</div><div><strong>Hiçbir alan otomatik okunamadı.</strong>${rotNote}<br/>Lütfen bilgileri manuel girin veya daha net bir fotoğraf çekin (düz, parlamasız, tüm ruhsat görünür şekilde).</div>`,
          'err'
        );
      } else {
        setOcrStatus(
          `<div style="font-size:18px;">✓</div><div><strong>${filled.length} alan otomatik dolduruldu:</strong> ${filled.join(', ')}.${rotNote}<br/><small style="opacity:0.85;">Lütfen kontrol edip gerekirse düzeltin.</small></div>`,
          'ok'
        );
      }

      if (fileLabelText) fileLabelText.textContent = '✓ ' + file.name;
      if (fileLabel) fileLabel.classList.add('has-file');
    } catch (err) {
      console.error('OCR error', err);
      setOcrStatus(
        '<div style="font-size:18px;">⚠️</div><div><strong>Otomatik okuma başarısız oldu.</strong> Bilgileri manuel girebilirsiniz; sorun değil.</div>',
        'err'
      );
      if (worker) {
        try { await worker.terminate(); } catch (e) {}
      }
    } finally {
      ocrInFlight = false;
    }
  });
})();
