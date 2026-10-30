const SHEET_NAME = 'Registrations';

function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('ระบบลงทะเบียนเข้างาน มีสุข')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(['เวลา','เลขทะเบียน','ชื่อ-นามสกุล','เบอร์โทร','หน่วยงาน','ผู้ติดตาม','หมายเหตุ']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function registerGuest(data) {
  if (!data || !String(data.fullName || '').trim()) throw new Error('กรุณากรอกชื่อ-นามสกุล');
  const sh = setupSheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const seq = Math.max(1, sh.getLastRow());
    const regNo = 'MS-' + Utilities.formatString('%05d', seq);
    sh.appendRow([
      new Date(), regNo, String(data.fullName || '').trim(), String(data.phone || '').trim(),
      String(data.organization || '').trim(), Number(data.guests || 0), String(data.note || '').trim()
    ]);
    return { ok: true, regNo: regNo, name: String(data.fullName || '').trim() };
  } finally {
    lock.releaseLock();
  }
}
