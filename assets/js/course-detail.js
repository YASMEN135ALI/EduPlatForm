// الحصول على ID من الرابط
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("id");

// عناصر الصفحة
const titleEl = document.getElementById("courseTitle");
const descEl = document.getElementById("courseDescription");
const teacherEl = document.getElementById("courseTeacher");
const lessonCountEl = document.getElementById("lessonCount");
const lessonsContainer = document.getElementById("lessonsContainer");

// بيانات تجريبية
const sampleCourse = {
    id: 1,
    title: "دورة Django",
    description: "تعلم كيفية بناء مواقع احترافية باستخدام Django.",
    teacher: "أحمد علي",
    lessons: [
        { id: 1, title: "مقدمة عن Django" },
        { id: 2, title: "إنشاء مشروع جديد" },
        { id: 3, title: "التعامل مع النماذج Models" },
        { id: 4, title: "إنشاء واجهات Views" },
        { id: 5, title: "إنشاء صفحات Templates" }
    ]
};

// عرض البيانات
function loadCourseDetails(course) {
    titleEl.textContent = course.title;
    descEl.textContent = course.description;
    teacherEl.textContent = course.teacher;
    lessonCountEl.textContent = course.lessons.length;

    lessonsContainer.innerHTML = "";

    course.lessons.forEach(lesson => {
        lessonsContainer.innerHTML += `
            <a class="list-group-item list-group-item-action lesson-item">
                ${lesson.title}
            </a>
        `;
    });
}

// تحميل البيانات التجريبية الآن
loadCourseDetails(sampleCourse);
