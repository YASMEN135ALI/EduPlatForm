document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("companyForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const company_name = document.getElementById("company_name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const industry = document.getElementById("industry").value.trim();
        const size = document.getElementById("size").value;
        const phone = document.getElementById("phone").value.trim();
        const location = document.getElementById("location").value.trim();
        const website = document.getElementById("website").value.trim();

        const license = document.getElementById("license").files[0];
        const certificate = document.getElementById("certificate").files[0];
        const logo = document.getElementById("logo").files[0];

        // التحقق من الحقول النصية
        if (!company_name || !email || !password || !industry || !size || !phone || !location) {
            alert("يرجى ملء جميع الحقول المطلوبة");
            return;
        }

        // التحقق من الملفات
        if (!license || !certificate) {
            alert("يرجى رفع السجل التجاري وشهادة التأسيس");
            return;
        }

        // تجهيز البيانات داخليًا
        const companyData = {
            company_name,
            email,
            password,
            industry,
            size,
            phone,
            location,
            website,
            license,
            certificate,
            logo
        };

        console.log("Company Data Ready:", companyData);
        alert("تم تجهيز البيانات — سيتم الربط مع الباك لاحقًا");
    });
});
