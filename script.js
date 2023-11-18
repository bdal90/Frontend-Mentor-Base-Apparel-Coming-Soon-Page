const formEl = document.querySelector('.form')
const emailEl = document.querySelector('.email');
const btnEl = document.querySelector('.btn');
const errorIconEl = document.querySelector('.error-icon');
const errorMsgEl = document.querySelector('.error-message');

// Check if input is email
const isEmail = (input) => {
   const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   return email.test(input);
} 

btnEl.addEventListener('click', (e) => {
    e.preventDefault();

    if (emailEl.value == '' || !isEmail(emailEl.value)) {
        errorIconEl.style.display = 'block';
        errorMsgEl.style.display = 'block';
        emailEl.style.border = '2px solid hsl(0, 93%, 68%)'
    } else {
        errorIconEl.style.display = 'none';
        errorMsgEl.style.display = 'none';
        emailEl.style.border = '2px solid rgb(73, 198, 150)';
    };
})
