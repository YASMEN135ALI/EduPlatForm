const coursesContainer = document.getElementById("coursesContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// بيانات تجريبية قبل الربط مع Django
let courses = [
    { id: 1, title: "دورة بايثون", description: "تعلم أساسيات بايثون.", category: "programming" },
    { id: 2, title: "دورة Django", description: "بناء مواقع احترافية.", category: "programming" },
    { id: 3, title: "دورة الذكاء الاصطناعي", description: "مقدمة في AI.", category: "ai" },
    { id: 4, title: "دورة التصميم الجرافيكي", description: "أساسيات التصميم.", category: "design" },
    { id: 5, title: "دورة إدارة الأعمال", description: "مفاهيم الإدارة الحديثة.", category: "business" }
];

// عرض الكورسات
function displayCourses(list) {
    coursesContainer.innerHTML = "";

    if (list.length === 0) {
        coursesContainer.innerHTML = `<p class="text-center text-muted">لا توجد نتائج مطابقة</p>`;
        return;
    }

    list.forEach(course => {
        coursesContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card course-card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${course.title}</h5>
                        <p class="card-text">${course.description}</p>
                        <a href="course-detail.html?id=${course.id}" class="btn btn-primary w-100">عرض التفاصيل</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// فلترة + بحث
function filterCourses() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    displayCourses(filtered);
}

// أحداث البحث والفلترة
searchInput.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);

// عرض أولي
displayCourses(courses);
