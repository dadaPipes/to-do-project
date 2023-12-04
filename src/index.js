// index.js

import initProject from "./InitData/initProject";
import handleToggleDisplayForm from "./Form/handleToggleDisplayForm";
import handleSubmitForm from "./Form/handleSubmitForm";
import handleCancelForm from "./Form/handleCancelForm";

initProject();

document.querySelector(".project__form--display").addEventListener("click", handleToggleDisplayForm);
document.querySelector('.form__submit').addEventListener('click', handleSubmitForm);
document.querySelector('.form__cancel').addEventListener('click', handleCancelForm);