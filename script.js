let username = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');
let input = document.querySelector('input');
let regLog = /^[a-zA-Z0-9]{2,15}$/;
let regPas = /^(?=.*[#])|(?=.*[$])[A-Za-z0-9#$]{2,15}$/;



submit.addEventListener('click', (event)=> {
    event.preventDefault();
    
    if (regLog.test(username.value) === false) {

        username.classList.add('error');
        username.classList.remove('success');
        
    
    } else {

        username.classList.add('success');
        username.classList.remove('error');
        console.log(username.value);
        username.value = ''; 

    } if (regPas.test(password.value) === false) {

        password.classList.add('error');
        password.classList.remove('success');
        
        
    } else {

        password.classList.add('success');
        password.classList.remove('error');
        console.log(password.value);
        username.value = '';
    }

});


username.addEventListener('input', ()=> {

   username.classList.remove('error');
    
});

password.addEventListener('input', ()=> {

    password.classList.remove('error');
     
 });

