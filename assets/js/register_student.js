document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const full_name = document.getElementById("full_name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const age = document.getElementById("age").value.trim();
        const education_level = document.getElementById("education_level").value;
        const country = document.getElementById("country").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // التحقق من الحقول
        if (!full_name || !email || !password || !age || !education_level || !country) {
            alert("يرجى ملء جميع الحقول المطلوبة");
            return;
        }

        // تجهيز البيانات داخليًا
        const studentData = {
            full_name,
            email,
            password,
            age,
            education_level,
            country,
            phone
        };

        console.log("Student Data Ready:", studentData);
        alert("تم تجهيز البيانات — سنقوم بربطها مع الباك لاحقًا");
    });
});
