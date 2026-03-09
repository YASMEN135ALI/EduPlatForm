// بيانات تجريبية
const jobs = [
    { id: 1, title: "مبرمج Python", type: "full-time", applicants: 12 },
    { id: 2, title: "مصمم UI/UX", type: "remote", applicants: 7 },
    { id: 3, title: "محلل بيانات", type: "part-time", applicants: 4 }
];

// ترجمة نوع الوظيفة
function translateType(type) {
    const types = {
        "full-time": "دوام كامل",
        "part-time": "دوام جزئي",
        "remote": "عن بُعد",
        "internship": "تدريب"
    };
    return types[type] || "غير محدد";
}

// تحميل الإحصائيات
document.getElementById("jobsCount").textContent = jobs.length;
document.getElementById("applicantsCount").textContent = jobs.reduce((a, b) => a + b.applicants, 0);
document.getElementById("activeJobsCount").textContent = jobs.length;

// تحميل الوظائف في الجدول
const jobsTable = document.getElementById("jobsTable");

jobs.forEach(job => {
    jobsTable.innerHTML += `
        <tr>
            <td>${job.title}</td>
            <td>${translateType(job.type)}</td>
            <td>${job.applicants}</td>
            <td>
                <a href="job-detail.html?id=${job.id}" class="btn btn-primary btn-sm btn-action">عرض</a>
                <a href="edit-job.html?id=${job.id}" class="btn btn-warning btn-sm btn-action">تعديل</a>
                <button class="btn btn-danger btn-sm btn-action" onclick="deleteJob(${job.id})">حذف</button>
            </td>
        </tr>
    `;
});

// حذف وظيفة (تجريبي)
function deleteJob(id) {
    alert("سيتم حذف الوظيفة ID: " + id + " عند الربط مع API");
}
