const emailField = document.getElementById('email-field');
const emailLabel = document.getElementById('email-label');
const emailError = document.getElementById('email-error');




function validateEmail() {
    
    emailLabel.style.bottom = '45px';



    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Please Enter a Valid E-mail Address';
        emailField.style.borderBottomColor= 'red';
        emailError.style.top = '120%';
        return false;

    }else{
        emailError.innerHTML = '';
        emailField.style.borderBottomColor= 'green';
        emailError.style.top = '120%';
        return true;
    }

}
