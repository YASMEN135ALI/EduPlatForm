document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("teacherForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const full_name = document.getElementById("full_name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const specialization = document.getElementById("specialization").value.trim();
        const experience_years = document.getElementById("experience_years").value.trim();
        const bio = document.getElementById("bio").value.trim();

        const certificate = document.getElementById("certificate").files[0];
        const cv = document.getElementById("cv").files[0];
        const photo = document.getElementById("photo").files[0];

        // التحقق من الحقول النصية
        if (!full_name || !email || !password || !specialization || !experience_years || !bio) {
            alert("يرجى ملء جميع الحقول المطلوبة");
            return;
        }

        // التحقق من الملفات
        if (!certificate || !cv) {
            alert("يرجى رفع الشهادة والسيرة الذاتية");
            return;
        }

        // تجهيز البيانات داخليًا
        const teacherData = {
            full_name,
            email,
            password,
            specialization,
            experience_years,
            bio,
            certificate,
            cv,
            photo
        };

        console.log("Teacher Data Ready:", teacherData);
        alert("تم تجهيز البيانات — سيتم الربط مع الباك لاحقًا");
    });
});
