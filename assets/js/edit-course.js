// الحصول على ID الكورس من الرابط
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("id");

// عناصر الصفحة
const titleEl = document.getElementById("courseTitle");
const descEl = document.getElementById("courseDescription");
const categoryEl = document.getElementById("courseCategory");
const levelEl = document.getElementById("courseLevel");
const imageEl = document.getElementById("courseImage");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

// بيانات تجريبية
const sampleCourse = {
    id: 1,
    title: "دورة Python",
    description: "تعلم أساسيات لغة Python من الصفر.",
    category: "programming",
    level: "beginner",
    image: "python.jpg"
};

// تحميل بيانات الكورس داخل الحقول
function loadCourseData(course) {
    titleEl.value = course.title;
    descEl.value = course.description;
    categoryEl.value = course.category;
    levelEl.value = course.level;
}

// تحميل البيانات التجريبية الآن
loadCourseData(sampleCourse);

// حفظ التعديلات
document.getElementById("editCourseForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedCourse = {
        title: titleEl.value.trim(),
        description: descEl.value.trim(),
        category: categoryEl.value.trim(),
        level: levelEl.value.trim(),
        image: imageEl.files[0] || null
    };

    if (!updatedCourse.title || !updatedCourse.description) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "تم حفظ التعديلات (جاهزة للربط مع API)";
    successMsg.classList.remove("d-none");

    console.log("Updated Course Data:", updatedCourse);
});
