/* Vesile Sigorta — Teklif formu & KVKK
 * Form gönderimi WhatsApp'a yönlendirir; KVKK toggle ve modal yönetimi.
 */
(function () {
  'use strict';

  const VEHICLE_TYPES = ['Trafik Sigortası', 'Kasko'];
  const qType = document.getElementById('qType');
  const vehicleFields = document.getElementById('vehicleFields');
  const ruhsatField = document.getElementById('ruhsatField');
  const qKvkk = document.getElementById('qKvkk');
  const qSubmitBtn = document.getElementById('qSubmitBtn');
  const form = document.getElementById('quoteForm');

  function toggleVehicleFields() {
    if (!qType) return;
    const show = VEHICLE_TYPES.includes(qType.value);
    if (vehicleFields) vehicleFields.style.display = show ? '' : 'none';
    if (ruhsatField) ruhsatField.style.display = show ? '' : 'none';
  }
  if (qType) qType.addEventListener('change', toggleVehicleFields);
  toggleVehicleFields();

  function submitQuote(e) {
    e.preventDefault();
    if (qKvkk && !qKvkk.checked) {
      alert('Devam etmek için lütfen KVKK aydınlatma metnini okuyup onaylayın.');
      return false;
    }
    const v = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };
    const name = v('qName');
    const tc = v('qTC');
    const dob = v('qDob');
    const phone = v('qPhone');
    const type = qType ? qType.value : '';
    const plate = v('qPlate');
    const tescil = v('qTescil');
    const msg = v('qMsg');
    const qRuhsat = document.getElementById('qRuhsat');
    const hasPhoto = qRuhsat && qRuhsat.files && qRuhsat.files[0];

    const lines = ['Merhaba, sigorta teklifi almak istiyorum.', ''];
    if (type) lines.push('*Sigorta Türü:* ' + type);
    if (name) lines.push('*Ad Soyad:* ' + name);
    if (tc) lines.push('*TC Kimlik:* ' + tc);
    if (dob) lines.push('*Doğum Tarihi:* ' + dob);
    if (phone) lines.push('*Telefon:* ' + phone);
    if (plate) lines.push('*Plaka:* ' + plate);
    if (tescil) lines.push('*Tescil No:* ' + tescil);
    if (msg) lines.push('*Detay:* ' + msg);
    if (hasPhoto) lines.push('', '_(Ruhsat fotoğrafı bu mesaja eklenecek)_');
    lines.push('', '_KVKK kapsamında verilerimin işlenmesini onayladım._');

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/905327386717?text=${text}`;
    window.open(url, '_blank');
    if (hasPhoto) {
      setTimeout(
        () =>
          alert(
            'WhatsApp açıldı. Sohbete giderek ruhsat fotoğrafını ek olarak gönderebilirsiniz.'
          ),
        400
      );
    }
    return false;
  }

  // Wire form submit (works both via inline onsubmit and addEventListener)
  if (form) form.addEventListener('submit', submitQuote);
  // Also expose globally so legacy onsubmit attribute keeps working
  window.submitQuote = submitQuote;

  // === KVKK toggle & modal ===
  if (qKvkk && qSubmitBtn) {
    qKvkk.addEventListener('change', () => {
      qSubmitBtn.disabled = !qKvkk.checked;
    });
  }
  const kvkkLink = document.getElementById('kvkkDetail');
  const kvkkModal = document.getElementById('kvkkModalBg');
  if (kvkkLink && kvkkModal) {
    kvkkLink.addEventListener('click', (e) => {
      e.preventDefault();
      kvkkModal.classList.add('open');
    });
    kvkkModal.addEventListener('click', (e) => {
      if (e.target.id === 'kvkkModalBg') e.currentTarget.classList.remove('open');
    });
  }
})();
