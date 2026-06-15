// بيانات المهارات والمشاريع والشهادات
const skills = {
  "الشبكات": ["CCNA", "Routing & Switching", "TCP/IP", "VLANs", "Troubleshooting", "MikroTik"],
  "الأنظمة": ["Windows Server", "Active Directory", "Microsoft 365", "Virtualization", "Support"],
  "البرمجة": ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  "قواعد البيانات": ["MySQL", "Database Design", "Data Management"],
  "أخرى": ["AI Tools", "IT Support", "Problem Solving", "Project Management"]
};

const projects = [
  ["نظام إدارة أكاديمية المدارس", "منصة ويب لإدارة نتائج الطلاب وإصدار الشهادات باستخدام تقنيات ويب حديثة وتكامل مع قواعد البيانات."],
  ["نظام إدارة الشهادات", "حل رقمي لإصدار الشهادات تلقائيًا ومعالجة النتائج."],
  ["بحث الذكاء الاصطناعي في التشخيص الطبي", "دراسة تقبّل المرضى للذكاء الاصطناعي في قرارات التشخيص الطبي."],
  ["مشروع مراقبة البيئة", "استكشاف حلول تقنية وقواعد بيانات وأساليب برمجية لأنظمة المراقبة البيئية."]
];

const certs = ["Cisco CCNA", "Huawei Certifications", "Coursera Certificates", "Networking Certifications", "AI Certifications"];

// بناء بطاقات المهارات
const skillsGrid = document.getElementById("skillsGrid");
for (const [cat, list] of Object.entries(skills)) {
  skillsGrid.innerHTML += `<div class="card glass reveal"><h4>${cat}</h4>
    <div class="tags">${list.map(s => `<span class="tag">${s}</span>`).join("")}</div></div>`;
}

// بناء بطاقات المشاريع
const projectsGrid = document.getElementById("projectsGrid");
projects.forEach(([t, d]) => {
  projectsGrid.innerHTML += `<div class="card glass reveal"><h4>${t}</h4><p>${d}</p></div>`;
});

// قائمة الشهادات
document.getElementById("certList").innerHTML = certs.map(c => `<li>✔ ${c}</li>`).join("");

// السنة في الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

// تبديل الوضع الداكن/الفاتح
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// قائمة الموبايل
const menu = document.getElementById("menu");
document.getElementById("hamburger").addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

// تأثير الظهور عند التمرير
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// زر العودة للأعلى
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 400);
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
