function login() {
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;

    if (!nickname || !password) {
        alert('Prosím, vyplňte všechna pole.');
        return;
    }

    // Pevně dané správné přihlašovací údaje
    const correctNickname = 'admin';
    const correctPassword = 'password123';

    if (nickname === correctNickname && password === correctPassword) {
        alert('Přihlášení úspěšné!');
    } else {
        alert('Nesprávné přihlašovací údaje.');
    }
}