// الحصول على ID الوظيفة من الرابط
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("id");

// بيانات تجريبية
const applicants = [
    {
        id: 1,
        name: "محمد أحمد",
        email: "m.ahmed@example.com",
        phone: "0590000000",
        cv: "cv1.pdf"
    },
    {
        id: 2,
        name: "سارة خالد",
        email: "sara.k@example.com",
        phone: "0591111111",
        cv: "cv2.pdf"
    },
    {
        id: 3,
        name: "علي محمود",
        email: "ali.m@example.com",
        phone: "0592222222",
        cv: "cv3.pdf"
    }
];

// تحميل المتقدمين في الجدول
const applicantsTable = document.getElementById("applicantsTable");

applicants.forEach(applicant => {
    applicantsTable.innerHTML += `
        <tr>
            <td>${applicant.name}</td>
            <td>${applicant.email}</td>
            <td>${applicant.phone}</td>
            <td>
                <a href="#" class="btn btn-secondary btn-sm btn-action">تحميل CV</a>
            </td>
            <td>
                <button class="btn btn-primary btn-sm btn-action" onclick="viewApplicant(${applicant.id})">عرض</button>
                <button class="btn btn-success btn-sm btn-action" onclick="acceptApplicant(${applicant.id})">قبول</button>
                <button class="btn btn-danger btn-sm btn-action" onclick="rejectApplicant(${applicant.id})">رفض</button>
            </td>
        </tr>
    `;
});

// دوال الإجراءات (تجريبية)
function viewApplicant(id) {
    alert("عرض تفاصيل المتقدم ID: " + id);
}

function acceptApplicant(id) {
    alert("تم قبول المتقدم ID: " + id + " (جاهز للربط مع API)");
}

function rejectApplicant(id) {
    alert("تم رفض المتقدم ID: " + id + " (جاهز للربط مع API)");
}
