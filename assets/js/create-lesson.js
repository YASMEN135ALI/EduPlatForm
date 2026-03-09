// الحصول على ID الكورس من الرابط
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("course");

const form = document.getElementById("createLessonForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("lessonTitle").value.trim();
    const description = document.getElementById("lessonDescription").value.trim();
    const video = document.getElementById("lessonVideo").value.trim();
    const order = document.getElementById("lessonOrder").value.trim();

    if (!title || !description || !video || !order) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "تم تجهيز بيانات الدرس (جاهزة للربط مع API)";
    successMsg.classList.remove("d-none");

    console.log("Lesson Data Ready:", {
        courseId,
        title,
        description,
        video,
        order
    });
});
