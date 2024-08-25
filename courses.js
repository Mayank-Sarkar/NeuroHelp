document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filter-form');
    const courseList = document.getElementById('course-list');

    // Mock course data
    const courses = [
        { id: 1, title: 'Introduction to Algebra', subject: 'math', difficulty: 'beginner' },
        { id: 2, title: 'Advanced Chemistry', subject: 'science', difficulty: 'advanced' },
        { id: 3, title: 'World Literature', subject: 'literature', difficulty: 'intermediate' },
        // Add more courses as needed
    ];

    function displayCourses(filteredCourses) {
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.title}</h3>
                <p>Subject: ${course.subject}</p>
                <p>Difficulty: ${course.difficulty}</p>
                <button onclick="enrollCourse(${course.id})">Enroll</button>
            `;
            courseList.appendChild(courseElement);
        });
    }

    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = document.getElementById('subject').value;
        const difficulty = document.getElementById('difficulty').value;

        const filteredCourses = courses.filter(course => 
            (subject === 'all' || course.subject === subject) &&
            (difficulty === 'all' || course.difficulty === difficulty)
        );

        displayCourses(filteredCourses);
    });

    // Initial display of all courses
    displayCourses(courses);
});

function enrollCourse(courseId) {
    // In a real app, this would send an enrollment request to the server
    alert(`Enrolled in course with ID: ${courseId}`);
}