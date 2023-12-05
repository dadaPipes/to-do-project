// index.js

import initProject from "./InitData/initProject";
import handleToggleDisplayForm from "./Events/handleToggleDisplayForm";
import handleSubmitForm from "./Events/handleSubmitForm";
import handleCancelForm from "./Events/handleCancelForm";

initProject();

document.querySelector(".project__form--display").addEventListener("click", handleToggleDisplayForm);
document.querySelector('.form__submit').addEventListener('click', handleSubmitForm);
document.querySelector('.form__cancel').addEventListener('click', handleCancelForm);