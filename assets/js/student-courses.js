document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    const coursesList = document.getElementById("coursesList");
    const noMsg = document.getElementById("noCoursesMsg");

    async function loadCourses(filters = {}) {
        coursesList.innerHTML = "";
        noMsg.classList.add("d-none");

        let query = new URLSearchParams(filters).toString();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/accounts/student/courses/?" + query, {
                headers: { "Authorization": "Token " + token }
            });

            const courses = await response.json();

            if (courses.length === 0) {
                noMsg.classList.remove("d-none");
                return;
            }

            courses.forEach(c => {
                coursesList.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${c.image || 'assets/img/course-placeholder.jpg'}" class="card-img-top" alt="Course Image">
                            <div class="card-body">
                                <h5 class="card-title">${c.title}</h5>
                                <p class="card-text">${c.description.substring(0, 100)}...</p>
                                <p><strong>السعر:</strong> ${c.price == 0 ? "مجاني" : c.price + " $"}</p>
                                <p><strong>المستوى:</strong> ${c.level}</p>
                                <p><strong>المدة:</strong> ${c.duration} ساعات</p>
                                <a href="course-details.html?id=${c.id}" class="btn btn-primary w-100">تفاصيل الكورس</a>
                            </div>
                        </div>
                    </div>
                `;
            });

        } catch (error) {
            console.error(error);
            alert("حدث خطأ أثناء تحميل الكورسات");
        }
    }

    // تحميل الكورسات عند فتح الصفحة
    loadCourses();

    // البحث والتصفية
    document.getElementById("searchForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const keyword = document.getElementById("keyword").value;
        const price = document.getElementById("priceFilter").value;
        const level = document.getElementById("levelFilter").value;

        loadCourses({ keyword, price, level });
    });
});
