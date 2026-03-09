const form = document.getElementById("createJobForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("jobTitle").value.trim();
    const type = document.getElementById("jobType").value.trim();
    const description = document.getElementById("jobDescription").value.trim();
    const requirements = document.getElementById("jobRequirements").value.trim();

    if (!title || !type || !description || !requirements) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        errorMsg.classList.remove("d-none");
        successMsg.classList.add("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "تم تجهيز الوظيفة للإرسال (جاهزة للربط مع API)";
    successMsg.classList.remove("d-none");

    console.log("Job Data Ready:", {
        title,
        type,
        description,
        requirements: requirements.split("\n")
    });
});

