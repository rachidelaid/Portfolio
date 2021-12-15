const form = document.querySelector('#contact form');
const { email } = form.elements;

function showMsg(input, msg) {
  const small = document.createElement('small');
  small.classList.add('error');
  small.textContent = msg;
  form.insertBefore(small, input);
}

function resetMsg() {
  document.querySelectorAll('small').forEach((s) => s.remove());
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  resetMsg();

  if (email.value !== email.value.toLowerCase()) {
    showMsg(email, 'The email should be lowercase');
    return false;
  }

  form.submit();
  return true;
});
