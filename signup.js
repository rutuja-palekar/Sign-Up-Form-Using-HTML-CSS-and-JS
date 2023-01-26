const txtFirstName = document.getElementById("firstName");
const txtLastName = document.getElementById("lastName");
const txtEmailId = document.getElementById("emailId");
const txtPassword = document.getElementById("password");
const txtCoPassword = document.getElementById("coPassword");
const btnSignUp = document.getElementById('btnSignUp');

const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");
const errorCoPassword = document.getElementById("errorCoPassword");

const users = [];

function onSignUp() {

    if (validateFirstNameC1() & validateLastNameC1() & validateEmailIdC1() & validatePasswordC1() & validateCoPasswordC1()) {
        const firstName = txtFirstName.value;
        const lastName = txtLastName.value;
        const emailId = txtEmailId.value;
        const password = txtPassword.value;
        const coPassword = txtCoPassword.value;

        const user = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            password: password,
            coPassword: coPassword
        }
        users.push(user);
        console.log(users);
    }
}

function validateFirstNameC1() {
    var namePattern = /^[a-zA-Z]*$/;
    var returnValue = true;

    if (!namePattern.test(txtFirstName.value)) {
        errorFirstName.innerHTML = "First Name Cannot Include Invalid Characters";
        returnValue = false;
    }

    function validateFirstNameC2() {
        if (txtFirstName.value === "") {
            errorFirstName.innerHTML = "First Name Should Not Be Blank";
            returnValue = false;
        }
    }

    function validateFirstNameC3() {
        if (txtFirstName.value.length < 3 & txtFirstName.value !== "" & namePattern.test(txtFirstName.value)) {
            errorFirstName.innerHTML = "First Name Should Not Be Too Short";
            returnValue = false;
        }
    }

    function validateFirstNameC4() {
        if (txtFirstName.value.length > 20 & txtFirstName.value !== "" & namePattern.test(txtFirstName.value)) {
            errorFirstName.innerHTML = "First Name Should Not Be Too Long";
            returnValue = false;
        }
    }
    validateFirstNameC2();
    validateFirstNameC3();
    validateFirstNameC4();
    return returnValue;
}

function validateLastNameC1() {
    var namePattern = /^[a-zA-Z]*$/;
    var returnValue = true;

    if (!namePattern.test(txtLastName.value)) {
        errorLastName.innerHTML = "Last Name Cannot Include Invalid Characters";
        returnValue = false;
    }

    function validateLastNameC2() {
        if (txtLastName.value === "") {
            errorLastName.innerHTML = "Last Name Should Not Be Blank";
            returnValue = false;
        }
    }

    function validateLastNameC3() {
        if (txtLastName.value.length < 3 & txtLastName.value !== "" & namePattern.test(txtLastName.value)) {
            errorLastName.innerHTML = "Last Name Should Not Be Too Short";
            returnValue = false;
        }
    }

    function validateLastNameC4() {
        if (txtLastName.value.length > 20 & txtLastName.value !== "" & namePattern.test(txtLastName.value)) {
            errorLastName.innerHTML = "Last Name Should Not Be Too Long";
            returnValue = false;
        }
    }
    validateLastNameC2();
    validateLastNameC3();
    validateLastNameC4();
    return returnValue;
}

function validateEmailIdC1() {
    var emailIdPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var returnValue = true;
    if (!emailIdPattern.test(txtEmailId.value)) {
        errorEmailId.innerHTML = "Invalid Email Address"
        returnValue = false;
    }

    function validateEmailIdC2() {
        if (txtEmailId.value === "") {
            errorEmailId.innerHTML = "Email Address Should Not Be Blank";
            returnValue = false;
        }
    }
    validateEmailIdC2()
    return returnValue;
}

function validatePasswordC1() {
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=^\S*$)[a-zA-Z\d!@#\$%\^&\*]{8,16}$/;
    var returnValue = true;

    if (!passwordPattern.test(txtPassword.value)) {
        errorPassword.innerHTML = "A password should be between 8 and 16 characters in length, containing at least one uppercase letter, one lowercase letter, one digit, one special character, and should not include any white spaces";
        returnValue = false;
    }

    function validatePasswordC2() {
        if (txtPassword.value === "") {
            errorPassword.innerHTML = "Password Should Not Be Blank";
            returnValue = false;
        }
    }
    validatePasswordC2()
    return returnValue;
}

function validateCoPasswordC1() {
    var returnValue = true;
    if (txtCoPassword.value === "") {
        errorCoPassword.innerHTML = "Confirm Password Should Not Be Blank";
        returnValue = false;
    }

    function validateCoPasswordC2() {
        if (txtCoPassword.value !== txtPassword.value) {
            errorCoPassword.innerHTML = "Password and Confirm Password Should Match";
            returnValue = false;
        }
    }
    validateCoPasswordC2()
    return returnValue;
}

txtFirstName.addEventListener("input", function () {
    if (validateFirstNameC1()) {
        errorFirstName.innerHTML = "";
    }
});

txtLastName.addEventListener("input", function () {
    if (validateLastNameC1()) {
        errorLastName.innerHTML = "";
    }
});

txtEmailId.addEventListener("input", function () {
    if (validateEmailIdC1()) {
        errorEmailId.innerHTML = "";
    }
});

txtPassword.addEventListener("input", function () {
    if (validatePasswordC1()) {
        errorPassword.innerHTML = "";
    }
});

txtCoPassword.addEventListener("input", function () {
    if (validateCoPasswordC1()) {
        errorCoPassword.innerHTML = "";
    }
});

btnSignUp.addEventListener('click', onSignUp);
