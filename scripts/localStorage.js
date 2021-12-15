const contactForm = document.querySelector('#contact form');
const { fullName, message, email } = contactForm.elements;

// storing the form data in local storage
contactForm.addEventListener('change', () => {
  const obj = {};

  if (fullName.value.trim() !== '') {
    obj.userName = fullName.value.trim();
  }

  if (email.value.trim() !== '') {
    obj.userEmail = email.value.trim();
  }

  if (message.value.trim() !== '') {
    obj.userMessage = message.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(obj));
});

// set the localStorage data to the form

const formObj = JSON.parse(localStorage.getItem('formData'));
const { userName, userEmail, userMessage } = formObj;

fullName.value = userName || '';
email.value = userEmail || '';
message.value = userMessage || '';
