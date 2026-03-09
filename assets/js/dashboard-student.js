// بيانات تجريبية
const myCourses = [
    { id: 1, title: "دورة Python", progress: "70%" },
    { id: 2, title: "دورة Django", progress: "40%" },
    { id: 3, title: "مقدمة في الذكاء الاصطناعي", progress: "90%" }
];

const certificates = 1;
const jobApplications = 3;

// تحميل الإحصائيات
document.getElementById("myCoursesCount").textContent = myCourses.length;
document.getElementById("certificatesCount").textContent = certificates;
document.getElementById("applicationsCount").textContent = jobApplications;

// تحميل الكورسات
const myCoursesContainer = document.getElementById("myCoursesContainer");

myCourses.forEach(course => {
    myCoursesContainer.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card course-card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${course.title}</h5>
                    <p class="text-muted">نسبة الإنجاز: ${course.progress}</p>
                    <a href="course-detail.html?id=${course.id}" class="btn btn-primary w-100">متابعة الكورس</a>
                </div>
            </div>
        </div>
    `;
});
