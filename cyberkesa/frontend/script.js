window.onload = function() {
    fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
};
