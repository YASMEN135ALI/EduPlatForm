// الحصول على ID الوظيفة من الرابط
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("id");

// عناصر الصفحة
const titleEl = document.getElementById("jobTitle");
const typeEl = document.getElementById("jobType");
const descEl = document.getElementById("jobDescription");
const reqEl = document.getElementById("jobRequirements");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

// بيانات تجريبية
const sampleJob = {
    id: 1,
    title: "مبرمج Python",
    type: "full-time",
    description: "مطلوب مبرمج Python بخبرة سنة على الأقل.",
    requirements: [
        "خبرة سنة في Python",
        "معرفة بـ Django",
        "قدرة على العمل ضمن فريق"
    ]
};

// تحميل بيانات الوظيفة داخل الحقول
function loadJobData(job) {
    titleEl.value = job.title;
    typeEl.value = job.type;
    descEl.value = job.description;
    reqEl.value = job.requirements.join("\n");
}

// تحميل البيانات التجريبية الآن
loadJobData(sampleJob);

// حفظ التعديلات
document.getElementById("editJobForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedJob = {
        title: titleEl.value.trim(),
        type: typeEl.value.trim(),
        description: descEl.value.trim(),
        requirements: reqEl.value.trim().split("\n")
    };

    if (!updatedJob.title || !updatedJob.type || !updatedJob.description) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "تم حفظ التعديلات (جاهزة للربط مع API)";
    successMsg.classList.remove("d-none");

    console.log("Updated Job Data:", updatedJob);
});
