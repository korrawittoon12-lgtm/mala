// ไฟล์ตั้งค่าของร้าน
// แก้เฉพาะข้อความที่อยู่ในเครื่องหมาย ' ' เท่านั้น ห้ามลบเครื่องหมาย ' หรือ ,
window.SHOP_CONFIG = {
  // ชื่อร้านที่จะแสดงบนหัวเมนู
  SHOP_NAME: 'หม่าล่าซัง',

  // LIFF ID ที่ได้จาก LINE Developers (หน้าตาประมาณ 1234567890-AbcdEfgh)
  // เว้นว่างไว้ก่อนได้ หน้าเมนูจะยังเปิดได้ตามปกติ
  LIFF_ID: '2011960823-qSuDOGSh',

  // ลิงก์ของ Google Apps Script (ลงท้ายด้วย /exec)
  // ถ้าเว้นว่าง หน้าเมนูจะทำงานใน "โหมดทดลอง" และออเดอร์จะไม่ถูกส่งไปไหน
  API_URL: 'https://script.google.com/macros/s/AKfycbz62_6FmL58wee42lC-3vwsNS8OCOjfoKWkfRLsfQ-Asi6yA20ofbfhTnDpam9z4LMN4g/exec',

  // หมวดที่ไม่ต้องถามระดับความเผ็ด
  NO_SPICE_CATEGORIES: ['เครื่องดื่ม'],
};
