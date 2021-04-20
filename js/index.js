let submit = document.querySelector('[type="submit"]');
let email = document.querySelector('input');
let errorMsg = document.querySelector('small');
submit.addEventListener('click', (e)=>{
    if(email.value === '' || email.value === null || email.value.split('').filter(l => l === '@').length == 0 ||
    email.value.split('').filter(l => l === '@').length > 1){
        e.preventDefault();
        errorMsg.classList.remove('d-none');
        errorMsg.classList.add('d-block');
    }else{
        errorMsg.classList.add('d-none');
        errorMsg.classList.remove('d-block');
        // submit
    }
})