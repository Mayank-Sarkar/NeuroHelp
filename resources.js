document.addEventListener('DOMContentLoaded', () => {
    const articleList = document.getElementById('article-list');
    const linkList = document.getElementById('link-list');
    const aidList = document.getElementById('aid-list');

    // Mock articles data
    const articles = [
        { title: 'Understanding Neurodiversity', url: '#' },
        { title: 'Strategies for Effective Learning', url: '#' },
        { title: 'The Importance of Self-Advocacy', url: '#' },
    ];

    // Mock external links data
    const externalLinks = [
        { name: 'National Autism Association', url: 'https://nationalautismassociation.org/' },
        { name: 'ADHD Association', url: 'https://add.org/' },
        { name: 'Dyslexia Association', url: 'https://dyslexiaida.org/' },
    ];

    // Mock study aids data
    const studyAids = [
        { name: 'Visual Schedule Template', url: '#' },
        { name: 'Noise-Cancelling Headphones Guide', url: '#' },
        { name: 'Mindfulness Exercises PDF', url: '#' },
    ];

    function populateList(list, items) {
        items.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title || item.name;
            li.appendChild(a);
            list.appendChild(li);
        });
    }

    populateList(articleList, articles);
    populateList(linkList, externalLinks);
    populateList(aidList, studyAids);
});