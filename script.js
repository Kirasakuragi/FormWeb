function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
        return false;
    }
    return true;
}
