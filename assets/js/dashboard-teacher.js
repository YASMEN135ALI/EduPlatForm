// بيانات تجريبية
const teacherCourses = [
    { id: 1, title: "دورة Python", students: 120, lessons: 15 },
    { id: 2, title: "دورة Django", students: 85, lessons: 10 },
    { id: 3, title: "مقدمة في الذكاء الاصطناعي", students: 60, lessons: 12 }
];

// حساب الإحصائيات
document.getElementById("coursesCount").textContent = teacherCourses.length;
document.getElementById("studentsCount").textContent = teacherCourses.reduce((a, b) => a + b.students, 0);
document.getElementById("lessonsCount").textContent = teacherCourses.reduce((a, b) => a + b.lessons, 0);

// تحميل الكورسات
const container = document.getElementById("teacherCoursesContainer");

teacherCourses.forEach(course => {
    container.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card course-card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${course.title}</h5>
                    <p class="text-muted">الطلاب: ${course.students}</p>
                    <p class="text-muted">الدروس: ${course.lessons}</p>

                    <a href="course-detail.html?id=${course.id}" class="btn btn-primary w-100 mb-2">عرض الكورس</a>
                    <a href="edit-course.html?id=${course.id}" class="btn btn-warning w-100 mb-2">تعديل الكورس</a>
                    <a href="create-lesson.html?course=${course.id}" class="btn btn-success w-100">إضافة درس</a>
                </div>
            </div>
        </div>
    `;
});
