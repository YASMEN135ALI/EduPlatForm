// الحصول على ID المدرّس من الرابط
const urlParams = new URLSearchParams(window.location.search);
const teacherId = urlParams.get("id");

// عناصر الصفحة
const nameEl = document.getElementById("teacherName");
const emailEl = document.getElementById("teacherEmail");
const specialtyEl = document.getElementById("teacherSpecialty");
const bioEl = document.getElementById("teacherBio");
const coursesCountEl = document.getElementById("coursesCount");
const studentsCountEl = document.getElementById("studentsCount");
const coursesContainer = document.getElementById("teacherCourses");

// بيانات تجريبية
const sampleTeacher = {
    id: 1,
    name: "أحمد سالم",
    email: "ahmed@example.com",
    specialty: "تطوير الويب",
    bio: "مدرّس متخصص في تطوير الويب بخبرة تزيد عن 7 سنوات في HTML, CSS, JavaScript و Django.",
    courses: [
        { id: 1, title: "دورة HTML & CSS", students: 150 },
        { id: 2, title: "دورة JavaScript", students: 120 },
        { id: 3, title: "دورة Django Framework", students: 90 }
    ]
};

// تحميل بيانات المدرّس
function loadTeacherProfile(teacher) {
    nameEl.textContent = teacher.name;
    emailEl.textContent = teacher.email;
    specialtyEl.textContent = teacher.specialty;
    bioEl.textContent = teacher.bio;

    coursesCountEl.textContent = teacher.courses.length;
    studentsCountEl.textContent = teacher.courses.reduce((a, b) => a + b.students, 0);

    // عرض الكورسات
    coursesContainer.innerHTML = "";
    teacher.courses.forEach(course => {
        coursesContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card course-card shadow-sm">
                    <div class="card-body">
                        <h5 class="fw-bold">${course.title}</h5>
                        <p class="text-muted">الطلاب: ${course.students}</p>
                        <a href="course-detail.html?id=${course.id}" class="btn btn-primary w-100">عرض الكورس</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// تحميل البيانات التجريبية الآن
loadTeacherProfile(sampleTeacher);
