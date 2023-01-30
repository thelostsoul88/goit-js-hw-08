import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(setLocalStorage, 500));
window.addEventListener('DOMContentLoaded', getLocalSorage);

let values = {
  email,
  message,
};

function setLocalStorage() {
  try {
    values.email = email.value;
    values.message = message.value;
    localStorage.setItem(KEY, JSON.stringify(values));
  } catch (error) {
    console.error('Set err', error.message);
  }
}

function getLocalSorage() {
  try {
    const getStorage = localStorage.getItem(KEY);
    const getParce = JSON.parse(getStorage);
    if (getParce) {
      email.value = getParce.email;
      message.value = getParce.message;
    }
  } catch (error) {
    console.error('Get err', error.message);
  }
}

function onSubmit(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Heyup! form must be completed');
    return;
  }
  console.log(`  Email: ${email.value},
  Message: ${message.value}`);
  e.currentTarget.reset();
  localStorage.removeItem(KEY);
}
