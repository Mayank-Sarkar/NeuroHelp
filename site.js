document.addEventListener('DOMContentLoaded', (event) => {
    const getStartedBtn = document.getElementById('get-started');
    
    getStartedBtn.addEventListener('click', () => {
        alert('Welcome! Let\'s create your personalized learning profile.');
        // In a real application, this would redirect to a profile creation page
    });

    // Function to change color scheme
    function changeColorScheme(bgColor, textColor) {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
    }

    // Example: Add a color scheme toggle button
    const colorToggleBtn = document.createElement('button');
    colorToggleBtn.textContent = 'Toggle Color Scheme';
    colorToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.style.backgroundColor === 'black';
        if (isDarkMode) {
            changeColorScheme('white', 'black');
        } else {
            changeColorScheme('black', 'white');
        }
    });
    document.body.appendChild(colorToggleBtn);
});