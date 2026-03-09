// الحصول على ID الدرس من الرابط
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get("id");

// عناصر الصفحة
const titleEl = document.getElementById("lessonTitle");
const descEl = document.getElementById("lessonDescription");
const videoEl = document.getElementById("lessonVideo");
const orderEl = document.getElementById("lessonOrder");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

// بيانات تجريبية
const sampleLesson = {
    id: 1,
    title: "مقدمة في Python",
    description: "شرح أساسيات لغة Python وكيفية تشغيل أول برنامج.",
    video: "https://youtube.com/example",
    order: 1
};

// تحميل بيانات الدرس داخل الحقول
function loadLessonData(lesson) {
    titleEl.value = lesson.title;
    descEl.value = lesson.description;
    videoEl.value = lesson.video;
    orderEl.value = lesson.order;
}

// تحميل البيانات التجريبية الآن
loadLessonData(sampleLesson);

// حفظ التعديلات
document.getElementById("editLessonForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedLesson = {
        title: titleEl.value.trim(),
        description: descEl.value.trim(),
        video: videoEl.value.trim(),
        order: orderEl.value.trim()
    };

    if (!updatedLesson.title || !updatedLesson.description || !updatedLesson.video || !updatedLesson.order) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "تم حفظ التعديلات (جاهزة للربط مع API)";
    successMsg.classList.remove("d-none");

    console.log("Updated Lesson Data:", updatedLesson);
});
