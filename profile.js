document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const progressChart = document.getElementById('progress-chart');

    // Mock user data
    let userData = {
        name: 'John Doe',
        email: 'john@example.com',
        learningStyle: 'visual',
        accommodations: 'Need extra time for assignments'
    };

    // Populate form with user data
    function populateForm() {
        document.getElementById('name').value = userData.name;
        document.getElementById('email').value = userData.email;
        document.getElementById('learning-style').value = userData.learningStyle;
        document.getElementById('accommodations').value = userData.accommodations;
    }

    // Handle form submission
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            learningStyle: document.getElementById('learning-style').value,
            accommodations: document.getElementById('accommodations').value
        };
        alert('Profile updated successfully!');
        // In a real app, this would send data to a server
    });

    // Mock function to display learning progress
    function displayProgress() {
        progressChart.innerHTML = `
            <h3>Course Progress</h3>
            <ul>
                <li>Mathematics: 75% complete</li>
                <li>Science: 60% complete</li>
                <li>Literature: 90% complete</li>
            </ul>
        `;
    }

    populateForm();
    displayProgress();
});