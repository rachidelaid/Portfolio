const form = document.querySelector('#contact form');
const nameInp = form.elements['name'];
const email = form.elements['email'];
const message = form.elements['message'];

function showMsg(input, msg) {
  const small = document.createElement('small');
  small.classList.add('error');
  small.textContent = msg;
  form.insertBefore(small, input);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  resetMsg();

  if (email.value !== email.value.toLowerCase()) {
    showMsg(email, 'Please enter a valid email');
    return false;
  }

  form.submit();
});
