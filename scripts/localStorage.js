// storing the form data in local storage
form.addEventListener('change', () => {
  const obj = {};

  if (name.value.trim() !== '') {
    obj.userName = name.value.trim();
  }

  if (email.value.trim() !== '') {
    obj.userEmail = email.value.trim();
  }

  if (message.value.trim() !== '') {
    obj.userMessage = message.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(obj));
});
