let input = document.getElementById('email');
let btn = document.getElementById('btn');
let errorMessage = document.querySelector('.error-message');

console.log(input.value);

function chekEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    return true;
  }
  return false;
}

function addErrorClass() {
  errorMessage.classList.add('error');
  input.classList.add('red-border');
}
function removeErrorClass() {
  errorMessage.classList.remove('error');
  input.classList.remove('red-border');
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value === '') {
    errorMessage.innerText = 'Please enter your email';
    addErrorClass();
  } else if (!chekEmail(input)) {
    errorMessage.innerText = 'Please provide a valid email address';
    addErrorClass();
  } else {
    input.value = '';
  }
});

input.addEventListener('focus', () => {
  removeErrorClass();
});
