const questions = [
    { word: "Account", options: ["บัญชี", "การกระทำ"], correctAnswer: 0 },
    { word: "Agreement", options: ["ความร่วมมือ", "ข้อตกลง"], correctAnswer: 1 },
    { word: "Application", options: ["การสมัคร", "การฝึกฝน"], correctAnswer: 0 },
    { word: "Balance", options: ["ยอดคงเหลือ", "ความสมดุล"], correctAnswer: 0 },
    { word: "Benefit", options: ["ผลประโยชน์", "ภาษี"], correctAnswer: 0 },
    { word: "Candidate", options: ["ผู้สมัคร", "ลูกค้า"], correctAnswer: 0 },
    { word: "Contract", options: ["สัญญา", "การตกลง"], correctAnswer: 0 },
    { word: "Delivery", options: ["การส่งสินค้า", "การตอบสนอง"], correctAnswer: 0 },
    { word: "Department", options: ["แผนก", "พนักงาน"], correctAnswer: 0 },
    { word: "Employee", options: ["ลูกจ้าง", "นายจ้าง"], correctAnswer: 0 },
    { word: "Estimate", options: ["การประมาณ", "การประเมิน"], correctAnswer: 1 },
    { word: "Expense", options: ["รายจ่าย", "รายได้"], correctAnswer: 0 },
    { word: "Income", options: ["รายรับ", "รายจ่าย"], correctAnswer: 0 },
    { word: "Inventory", options: ["สินค้าคงคลัง", "สต๊อก"], correctAnswer: 0 },
    { word: "Management", options: ["การบริหาร", "การปกครอง"], correctAnswer: 0 },
    { word: "Marketing", options: ["การตลาด", "การขาย"], correctAnswer: 0 },
    { word: "Negotiation", options: ["การเจรจา", "การเสนอขาย"], correctAnswer: 0 },
    { word: "Position", options: ["ตำแหน่งงาน", "หน้าที่"], correctAnswer: 0 },
    { word: "Profit", options: ["กำไร", "ขาดทุน"], correctAnswer: 0 },
    { word: "Promotion", options: ["การส่งเสริม", "การลงโทษ"], correctAnswer: 0 }
,
    { word: "Access", options: ["การเข้าถึง", "การออกแบบ"], correctAnswer: 0 },
    { word: "Advertising", options: ["โฆษณา", "การตลาด"], correctAnswer: 0 },
    { word: "Budget", options: ["งบประมาณ", "ต้นทุน"], correctAnswer: 0 },
    { word: "Client", options: ["ลูกค้า", "นายจ้าง"], correctAnswer: 0 },
    { word: "Conference", options: ["การประชุม", "การสนทนา"], correctAnswer: 0 },
    { word: "Deadline", options: ["กำหนดส่ง", "ระยะเวลา"], correctAnswer: 0 },
    { word: "Demand", options: ["ความต้องการ", "คำแนะนำ"], correctAnswer: 0 },
    { word: "Distribution", options: ["การจัดจำหน่าย", "การผลิต"], correctAnswer: 0 },
    { word: "Feedback", options: ["ข้อเสนอแนะ", "การสนับสนุน"], correctAnswer: 0 },
    { word: "Goal", options: ["เป้าหมาย", "แผนงาน"], correctAnswer: 0 },
    { word: "Guideline", options: ["แนวทาง", "การตัดสิน"], correctAnswer: 0 },
    { word: "Industry", options: ["อุตสาหกรรม", "การผลิต"], correctAnswer: 0 },
    { word: "Information", options: ["ข้อมูล", "การแปล"], correctAnswer: 0 },
    { word: "Installation", options: ["การติดตั้ง", "การถอดถอน"], correctAnswer: 0 },
    { word: "Insurance", options: ["ประกันภัย", "การลงทุน"], correctAnswer: 0 },
    { word: "Labor", options: ["แรงงาน", "ผลิตภัณฑ์"], correctAnswer: 0 },
    { word: "Maintenance", options: ["การบำรุงรักษา", "การก่อสร้าง"], correctAnswer: 0 },
    { word: "Objective", options: ["เป้าหมาย", "ปัญหา"], correctAnswer: 0 },
    { word: "Operation", options: ["การดำเนินการ", "การยกเลิก"], correctAnswer: 0 },
    { word: "Opportunity", options: ["โอกาส", "ปัญหา"], correctAnswer: 0 },
    { word: "Orientation", options: ["การปฐมนิเทศ", "การสำรวจ"], correctAnswer: 0 },
    { word: "Packaging", options: ["บรรจุภัณฑ์", "ขนส่งสินค้า"], correctAnswer: 0 },
    { word: "Performance", options: ["ประสิทธิภาพ", "กำไร"], correctAnswer: 0 },
    { word: "Policy", options: ["นโยบาย", "การปกครอง"], correctAnswer: 0 },
    { word: "Procedure", options: ["ขั้นตอน", "การประเมิน"], correctAnswer: 0 },
    { word: "Production", options: ["การผลิต", "การส่งออก"], correctAnswer: 0 },
    { word: "Profit", options: ["กำไร", "ขาดทุน"], correctAnswer: 0 },
    { word: "Project", options: ["โครงการ", "การก่อสร้าง"], correctAnswer: 0 },
    { word: "Proposal", options: ["ข้อเสนอ", "ข้อตกลง"], correctAnswer: 0 },
    { word: "Qualification", options: ["คุณสมบัติ", "คุณภาพ"], correctAnswer: 0 },
    { word: "Quota", options: ["โควต้า", "ปริมาณ"], correctAnswer: 0 },
    { word: "Reception", options: ["การต้อนรับ", "การตอบสนอง"], correctAnswer: 0 },
    { word: "Recruitment", options: ["การสรรหา", "การเลิกจ้าง"], correctAnswer: 0 },
    { word: "Refund", options: ["การคืนเงิน", "การชำระเงิน"], correctAnswer: 0 },
    { word: "Renewal", options: ["การต่ออายุ", "การสิ้นสุด"], correctAnswer: 0 },
    { word: "Research", options: ["การวิจัย", "การแก้ไข"], correctAnswer: 0 },
    { word: "Resource", options: ["ทรัพยากร", "การตอบสนอง"], correctAnswer: 0 },
    { word: "Response", options: ["การตอบกลับ", "การสนับสนุน"], correctAnswer: 0 },
    { word: "Revenue", options: ["รายได้", "ค่าใช้จ่าย"], correctAnswer: 0 },
    { word: "Risk", options: ["ความเสี่ยง", "ผลประโยชน์"], correctAnswer: 0 },
    { word: "Schedule", options: ["ตารางเวลา", "การนัดหมาย"], correctAnswer: 0 },
    { word: "Service", options: ["บริการ", "สินค้า"], correctAnswer: 0 },
    { word: "Strategy", options: ["กลยุทธ์", "โครงการ"], correctAnswer: 0 },
    { word: "Suggestion", options: ["ข้อเสนอแนะ", "คำสั่ง"], correctAnswer: 0 },
    { word: "Supply", options: ["การจัดหา", "การสั่งซื้อ"], correctAnswer: 0 },
    { word: "Target", options: ["เป้าหมาย", "แผนที่"], correctAnswer: 0 },
    { word: "Task", options: ["งาน", "เป้าหมาย"], correctAnswer: 0 },
    { word: "Transaction", options: ["ธุรกรรม", "ข้อมูล"], correctAnswer: 0 },
    { word: "Training", options: ["การฝึกอบรม", "การผลิต"], correctAnswer: 0 },
    { word: "Update", options: ["อัปเดต", "การลบ"], correctAnswer: 0 }
];
