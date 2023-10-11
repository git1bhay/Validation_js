const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
// document.querySelector('input').style.backgroundColor = 'red';

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
})

const sendData = (usernameVal,sRate,count)=>{
    if(sRate===count){
        alert("registration successfull")
        swal("Welcome "+ usernameVal +" registration successful");
        location.href = `demo.html?username=${usernameVal}`
    }
}

// const successMsg=()=>{
//     const formCon = document.getElementById('form-control');
//     const count = formCon.length;
//     for(var i=0;i<count;i++){
//         if(formCon[i].className ==='form-control success'){
//             var sRate = 0 + i;
//             sendData(sRate,count-1);
//         }
//         else{
//             return false;
//         }
//     }
// }
const successMsg = (usernameVal) => {
    const formCon = document.querySelectorAll('.form-control.success');
    const count = formCon.length;
    for (let i = 0; i < count; i++) {
        if (formCon[i].className === 'form-control success') {
            var sRate = i;
            sendData(usernameVal,sRate, count - 1);
        }
    }
}

const isEmail = (emailVal)=>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol<1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot<=atSymbol+2) return false;
    if(dot=== emailVal.length-1) return false;
    return true


}



function setSuccessMsg(input){
    const formControl = input.parentElement;
    
    formControl.className = 'form-control success';
    
}


const validate = ()=>{
    // const formVal = form.value.trim();
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal===""){
        setErrormsg(username, 'username cannot be blank');
    }
    else if(usernameVal.length<=2){
        setErrormsg(username, 'username min 3 char')
    }
    else{
        setSuccessMsg(username);
    }

    if(emailVal===""){
        setErrormsg(email, 'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrormsg(email, 'Not a valid Email')
    }
    else{
        setSuccessMsg(email);
    }
    if(phoneVal===""){
        setErrormsg(phone, 'Phone cannot be blank');
    }
    else if(phoneVal.length!=10 || phoneVal.length<10){
        setErrormsg(phone, 'Not a valid num')
    }
    else{
        setSuccessMsg(phone);
    }
    if(passwordVal===""){
        setErrormsg(password, 'Password cannot be blank');
    }
    else if(passwordVal.length<=5){
        setErrormsg(password, 'minimum 6 Char')
    }
    else{
        setSuccessMsg(password);
    }
    if(cpasswordVal===""){
        setErrormsg(cpassword, 'Confirm Password cannot be blank');
    }
    else if(cpasswordVal!==passwordVal){
        setErrormsg(cpassword, 'Not Matching password')
    }
    else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);
}

function setErrormsg(input, errormsg) {
    const formControl = input.parentElement;
    if (formControl) {
        const small = formControl.querySelector('small');
        if (small) {
            formControl.className = 'form-control error';
            small.innerText = errormsg;
        }
    }
}

