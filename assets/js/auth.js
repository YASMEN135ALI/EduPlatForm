document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (!username || !password) {
        errorMsg.textContent = "يرجى إدخال اسم المستخدم وكلمة المرور";
        errorMsg.classList.remove("d-none");
        return;
    }

    errorMsg.classList.add("d-none");

    console.log("جاهز للربط مع API…");
});
// تسجيل حساب جديد
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const role = document.getElementById("role").value.trim();

    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");

    if (!username || !email || !password || !confirmPassword || !role) {
        errorMsg.textContent = "يرجى تعبئة جميع الحقول";
        errorMsg.classList.remove("d-none");
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = "كلمتا المرور غير متطابقتين";
        errorMsg.classList.remove("d-none");
        return;
    }

    errorMsg.classList.add("d-none");
    successMsg.textContent = "جاهز للربط مع API…";
    successMsg.classList.remove("d-none");

    console.log("بيانات جاهزة للإرسال:", { username, email, password, role });
});
