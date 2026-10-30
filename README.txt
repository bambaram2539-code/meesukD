ระบบลงทะเบียนเข้างาน มีสุข — Google Sheets + Apps Script

วิธีติดตั้ง
1) สร้าง Google Sheets ใหม่ ตั้งชื่อ เช่น “ลงทะเบียนเข้างาน มีสุข”
2) ในชีต เลือก Extensions > Apps Script
3) เปิดไฟล์ Code.gs แล้วลบโค้ดเดิม จากนั้นคัดลอก Code.gs ในชุดนี้ไปวาง
4) กด + > HTML ตั้งชื่อไฟล์ว่า Index แล้วคัดลอก Index.html ไปวาง
5) กด Save
6) กด Deploy > New deployment
7) Select type > Web app
8) Execute as: Me
9) Who has access: Anyone (หรือค่าที่บัญชี Google ของคุณอนุญาตให้ผู้เข้าร่วมเข้าถึงได้)
10) กด Deploy และอนุญาตสิทธิ์ Google ตามหน้าจอ
11) Google จะแสดง Web app URL ที่ลงท้ายด้วย /exec — นี่คือลิงก์ลงทะเบียนจริง
12) ส่งลิงก์ /exec เข้า LINE ได้ทันที

ข้อมูลจะถูกสร้าง/บันทึกในชีตชื่อ Registrations อัตโนมัติเมื่อมีคนลงทะเบียนครั้งแรก

หมายเหตุ: ถ้าแก้โค้ดภายหลัง ให้ Deploy > Manage deployments > Edit > New version > Deploy เพื่ออัปเดตเว็บจริง
