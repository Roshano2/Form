var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) 
    {
        nameError.innerHTML = 'Name is required';
        submitError.innerHTML = 'Fix the Error';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    submitError.innerHTML = '';
    return true;
}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        submitError.innerHTML = 'Fix the Error';
        return false;
    }
    if(phone.length !=10){
        phoneError.innerHTML = '10 digits only';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerhtml = 'Digits only'
        return false;
    }
    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    submitError.innerHTML = '';
    return true;
    
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'email is required'; 
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatemessage(){
    var message = document.getElementById('contact-message').value;

    if(message.length == 0){
        messageError.innerHTML = 'Your message is necessary';
        return false;
    }

    if(message.length < 30){
        messageError.innerHTML = 'Complete your message';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatesubmit(){
    if(!validatename() || !validatephone() || !validateEmail() || !validatemessage())
    {
        submitError.style.display = 'block';
        submitError.innerText = 'Please fix the Error';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }


}
