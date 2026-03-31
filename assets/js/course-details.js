// استخراج ID من الرابط
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("id");

// =======================
// تحميل بيانات الكورس
// =======================
async function loadCourse() {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/accounts/teacher/course/${courseId}/`, {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        });

        const course = await response.json();

        document.getElementById("courseTitle").innerText = course.title;
        document.getElementById("courseDescription").innerText = course.description;
        document.getElementById("coursePrice").innerText = course.price + " $";
        document.getElementById("courseLevel").innerText = course.level;
        document.getElementById("courseDuration").innerText = course.duration + " ساعة";
        document.getElementById("courseTeacher").innerText = course.teacher_name;

        if (course.image) {
            document.getElementById("courseImage").src = course.image;
        }

    } catch (error) {
        console.error("Error loading course:", error);
    }
}

// =======================
// تحميل الدروس
// =======================
async function loadLessons() {
    const response = await fetch(`http://127.0.0.1:8000/api/accounts/course/${courseId}/lessons/`, {
        headers: {
            "Authorization": "Token " + localStorage.getItem("token")
        }
    });

    const lessons = await response.json();
    const list = document.getElementById("lessonsList");
    list.innerHTML = "";

    lessons.forEach(lesson => {
        list.innerHTML += `
            <a href="#" class="list-group-item list-group-item-action">
                ${lesson.title}
            </a>
        `;
    });
}

// =======================
// تحميل الاختبارات
// =======================
async function loadQuizzes() {
    const response = await fetch(`http://127.0.0.1:8000/api/accounts/course/${courseId}/lessons/`, {
        headers: {
            "Authorization": "Token " + localStorage.getItem("token")
        }
    });

    const lessons = await response.json();
    const list = document.getElementById("quizzesList");
    list.innerHTML = "";

    for (const lesson of lessons) {
        const quizRes = await fetch(`http://127.0.0.1:8000/api/accounts/quiz/${lesson.id}/`);
        if (quizRes.ok) {
            const quiz = await quizRes.json();
            list.innerHTML += `
                <a href="#" class="list-group-item list-group-item-action">
                    اختبار: ${quiz.title}
                </a>
            `;
        }
    }
}

// تشغيل كل شيء
loadCourse();
loadLessons();
loadQuizzes();
