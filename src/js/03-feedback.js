import storageApp from './storage';
import throttle from 'lodash.throttle';
const CONTACT_FORM_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
initialPage();
formRef.addEventListener('input', handleInput);

function handleInput(event) {
  let savedData = storageApp.load(CONTACT_FORM_KEY);
  if (!savedData) {
    savedData = {};
  }
  const { name, value } = event.target;
  savedData[name] = value;
  storageApp.save(CONTACT_FORM_KEY, savedData);
}

function initialPage() {
  const savedData = storageApp.load(CONTACT_FORM_KEY);
  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      formRef.elements[name] = value;
    });
  }
}

const handleSubmit = event => {
  event.preventDefault();
  const { email, message } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  storageApp.remove(CONTACT_FORM_KEY);
};

formRef.addEventListener('submit', handleSubmit);
