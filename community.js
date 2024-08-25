document.addEventListener('DOMContentLoaded', () => {
    const topicList = document.getElementById('topic-list');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const storiesContainer = document.getElementById('stories-container');

    // Mock forum topics
    const topics = [
        { id: 1, title: 'Study tips for ADHD students' },
        { id: 2, title: 'Accommodations in higher education' },
        { id: 3, title: 'Coping with sensory overload' },
    ];

    // Display forum topics
    topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic.title;
        topicList.appendChild(li);
    });

    // Handle chat form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (chatInput.value.trim()) {
            addChatMessage('You', chatInput.value);
            chatInput.value = '';
            // In a real app, this would send the message to a server
        }
    });

    function addChatMessage(user, message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${user}: ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Mock success stories
    const successStories = [
        { author: 'Alex', story: 'I never thought I could graduate, but with the right support, I did it!' },
        { author: 'Sam', story: 'Finding this community helped me understand my neurodiversity and thrive.' },
    ];

    // Display success stories
    successStories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.innerHTML = `
            <h3>${story.author}'s Story</h3>
            <p>${story.story}</p>
        `;
        storiesContainer.appendChild(storyElement);
    });
});