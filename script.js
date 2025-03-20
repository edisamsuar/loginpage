document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = {
        'Admin': { password: 'admin123', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeJNCQj8UjEZVelI0TSb4r-6np_NE1iDujK9aJ0KaAJJnUUeA/viewform' },
        'hafizatunnafisah': { password: 'hfzatunn0321', link: 'https://edisamsuar.github.io/aksesadminhfz' },
        'nurulalfalah': { password: 'nrlalfalah3561', link: 'https://edisamsuar.github.io/aksesadminnrl' },
        'user4': { password: 'pass4', link: 'https://link4.com' },
        'user5': { password: 'pass5', link: 'https://link5.com' }
    };

    if (users[username] && users[username].password === password) {
        window.location.href = users[username].link;
    } else {
        alert('Username atau password salah! Cube Ketik Ulang segermi');
    }
});