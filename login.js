const userData = sessionStorage.getItem('userData');
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');

let users = [];

if (userData) {
    users = JSON.parse(userData);
}

if (users && users.length === 0) {
    window.location.href = './';
}

function onLoginIn() {
    const emailId = txtEmail.value;
    const password = txtPassword.value;

    const filteredUser = users.filter(user => user.emailId === emailId
        && user.password === password);

    if (filteredUser && filteredUser.length > 0) {
        alert('Login Successfully');
    }

    else {
        alert('Entered email or password is incorrect');
    }
}
