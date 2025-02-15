function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.querySelector('.show-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
}

function login() {
    const username = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('error-message');
    const errorMessage2 = document.getElementById('error-message-2');

    // Skrytí chybových zpráv při novém pokusu o přihlášení
    errorMessage.style.display = 'none';
    errorMessage2.style.display = 'none';

    if (!username || !password) {
        errorMessage2.style.display = 'block';
        return;
    }

    // Simulace ověření uživatele
    if (username === 'admin' && password === 'password') {
        // Přesměrování na dashboard pro administrátory
        window.location.href = 'dashboard.html?role=admin';
    } else if (username === 'player' && password === 'password') {
        // Přesměrování na dashboard pro hráče
        window.location.href = 'dashboard.html?role=player';
    } else {
        errorMessage.style.display = 'block';
    }
}
