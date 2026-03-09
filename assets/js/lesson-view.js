// الحصول على ID الدرس من الرابط
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get("id");

// عناصر الصفحة
const titleEl = document.getElementById("lessonTitle");
const descEl = document.getElementById("lessonDescription");
const videoEl = document.getElementById("lessonVideo");

// بيانات تجريبية
const sampleLesson = {
    id: 1,
    title: "مقدمة في Python",
    description: "في هذا الدرس نتعرف على أساسيات لغة Python وكيفية كتابة أول برنامج.",
    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
    next: 2,
    prev: null
};

// تحميل بيانات الدرس
function loadLesson(lesson) {
    titleEl.textContent = lesson.title;
    descEl.textContent = lesson.description;
    videoEl.src = lesson.video;

    // أزرار التنقل
    const prevBtn = document.getElementById("prevLesson");
    const nextBtn = document.getElementById("nextLesson");

    if (lesson.prev) {
        prevBtn.onclick = () => window.location.href = `lesson-view.html?id=${lesson.prev}`;
    } else {
        prevBtn.disabled = true;
    }

    if (lesson.next) {
        nextBtn.onclick = () => window.location.href = `lesson-view.html?id=${lesson.next}`;
    } else {
        nextBtn.disabled = true;
    }
}

// تحميل البيانات التجريبية الآن
loadLesson(sampleLesson);

