// adding the js styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})
function checkInput() {
    // let the values from the input

    let isValid = true;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    //Username validation
    if (usernameValue === '') {
        setErrorFor(username, ' Username can not be blank');
        isValid = false;
    } else if (usernameValue.length < 6) {
        setErrorFor(username, ' Username must be at least 6 characters long');
        isValid = false;
    } else {
        setSuccessFor(username);
    }

    //Email validation
    if (emailValue === '') {
        setErrorFor(email, ' Email can not be blank');
        isValid = false;
    } else if (emailValue.length < 6) {
        setErrorFor(email, ' Email must be at least 6 characters long');
        isValid = false;
    } else {
        setSuccessFor(email);
    }

    //Password vaildation
    if (passwordValue === '') {
        setErrorFor(password, ' Password can not be blank');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setErrorFor(password, ' Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccessFor(password);
    }
       //Confirm Password vaildation
       if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Password not the same');
        isValid = false;
    } else if (password2Value.length < 8) {
        setErrorFor(password2, 'Confirm Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccessFor(password2);
    }

    /// new page
    if (isValid) {
        // Send user to welcome page
        window.location.href = 'index-2.html'
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;  //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small 
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;  //.form-control
    // add error class
    formControl.className = 'form-control success';
}
