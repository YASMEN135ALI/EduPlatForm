const form = document.getElementById("createCourseForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("courseTitle").value.trim();
    const description = document.getElementById("courseDescription").value.trim();
    const category = document.getElementById("courseCategory").value.trim();
    const level = document.getElementById("courseLevel").value.trim();
    const image = document.getElementById("courseImage").files[0];

    if (!title || !description || !category || !level) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    if (!image) {
        errorMsg.textContent = "يرجى اختيار صورة للكورس";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "تم تجهيز بيانات الكورس (جاهزة للربط مع API)";
    successMsg.classList.remove("d-none");

    console.log("Course Data Ready:", {
        title,
        description,
        category,
        level,
        image
    });
});
