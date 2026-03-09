// الحصول على ID الطالب من الرابط
const urlParams = new URLSearchParams(window.location.search);
const studentId = urlParams.get("id");

// عناصر الصفحة
const nameEl = document.getElementById("studentName");
const emailEl = document.getElementById("studentEmail");
const progressBadge = document.getElementById("progressBadge");
const lessonsList = document.getElementById("completedLessons");
const certificatesContainer = document.getElementById("certificatesContainer");

// بيانات تجريبية
const sampleStudent = {
    id: 1,
    name: "محمد أحمد",
    email: "m.ahmed@example.com",
    progress: "70%",
    completedLessons: [
        "مقدمة في Python",
        "المتغيرات والأنواع",
        "الحلقات Loops"
    ],
    certificates: [
        { id: 1, title: "شهادة إتمام دورة Python" }
    ]
};

// تحميل بيانات الطالب
function loadStudentProfile(student) {
    nameEl.textContent = student.name;
    emailEl.textContent = student.email;
    progressBadge.textContent = "نسبة التقدم: " + student.progress;

    // الدروس المكتملة
    lessonsList.innerHTML = "";
    student.completedLessons.forEach(lesson => {
        lessonsList.innerHTML += `<li class="list-group-item">${lesson}</li>`;
    });

    // الشهادات
    certificatesContainer.innerHTML = "";
    if (student.certificates.length === 0) {
        certificatesContainer.innerHTML = `<p class="text-muted">لا توجد شهادات بعد</p>`;
    } else {
        student.certificates.forEach(cert => {
            certificatesContainer.innerHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card shadow-sm p-3 text-center">
                        <h5 class="fw-bold">${cert.title}</h5>
                        <button class="btn btn-primary btn-sm mt-2">عرض الشهادة</button>
                    </div>
                </div>
            `;
        });
    }
}

// تحميل البيانات التجريبية الآن
loadStudentProfile(sampleStudent);
