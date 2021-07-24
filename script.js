let username = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');
let inputs = document.querySelectorAll('input');
let regLog = /[a-zA-Z0-9]{2,15}/;
let regPas = /[a-zA-Z0-9\$\#]{6,15}/;


submit.addEventListener('click', (event)=> {
    event.preventDefault();
    
    if (regLog.test(username.value) === false) {
        username.classList.add('error');
        username.classList.remove('success');
        
    
    } else {
        username.classList.add('success');
        username.classList.remove('error');
        console.log(username.value);
    }

    // username.value = '';

});

submit.addEventListener('click', (event)=> {
    event.preventDefault();

     if (regPas.test(password.value) === false) {
        password.classList.add('error');
        password.classList.remove('success');
        
    } else {
        password.classList.add('success');
        password.classList.remove('error');
    }
    // password.value = '';
});


username.onkeydown = function(event) {

    if (event.code == 'Backspace') {
        this.className= 'success';
    } 
}

password.onkeydown = function(event) {

    if (event.code == 'Backspace') {
        this.className= 'success';
    } 

}
