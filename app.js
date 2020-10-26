// Form Blur Event Listeners
document.getElementById('fname').addEventListener('blur', validateFName);
document.getElementById('mname').addEventListener('blur', validateMName);
document.getElementById('sno').addEventListener('blur', validateSno);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validateMobileno);

function validateFName() {
    const fname = document.getElementById('fname');
    const re = /^([a-zA-Z]{2,10})( )?([a-zA-Z]{2,10})( )?([a-zA-Z]{2,10})([ ]+)?$/;
    
    if(!re.test(fname.value)) {
        fname.classList.add('is-invalid');
        return false;
    } 
    else {
        fname.classList.remove('is-invalid');
        fname.classList.add('is-valid');
        return true;
    }
}
function validateMName() {
    const fname = document.getElementById('mname');
    const re = /^([a-zA-Z]{2,10})([ ]+)?$/;
    
    if(!re.test(mname.value)) {
        mname.classList.add('is-invalid');
        return false;
    } 
    else {
        mname.classList.remove('is-invalid');
        mname.classList.add('is-valid');
        return true;
    }
}

function validateSno() {
    const sno = document.getElementById('sno');
    const re = /^(D020)([0-9]{4})([ ]+)$/;

    if(!re.test(sno.value)) {
        sno.classList.add('is-invalid');
        return false;
    } 
    else {
        sno.classList.remove('is-invalid');
        sno.classList.add('is-valid');
        return true;
    }
}
function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([\w\.\-]+)@([a-z0-9\-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
        return false;
    } 
    else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true;
    }
}
function validateMobileno() {
    const mno = document.getElementById('mno');
    const re = /^(\+)?( )?([0-9]{2,4})?( )?[6-9]\d{9}$/;

    if(!re.test(mno.value)) {
        mno.classList.add('is-invalid');
        return false;
    } 
    else {
        mno.classList.remove('is-invalid');
        mno.classList.add('is-valid');
        return true;
    }
}


function formvalid() {
    if(validateFName() & validateSno() & validateEmail() & validateMobileno() & validateMName()){
        return true;
    }
    else{
        return false;
    }
}
