// index.js
import FormHandler from './Form/FormHandler'

// Explicitly hide the form
const form = document.querySelector('.form__content');
form.style.display = "none";

const formHandler = new FormHandler;
formHandler.handleDisplay();
formHandler.handleSubmit();
formHandler.handleCancel();