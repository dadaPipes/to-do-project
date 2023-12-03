// index.js
import handleProjectFormInput from "./Eventhandlers/handleProjectFormInput";
import toggleForm from "./Eventhandlers/toggleForm";
import cancelForm from "./Eventhandlers/cancelForm";
import initProject from "./IInitData/initProject";

initProject('Init title');

document.querySelector(".project__displayFormButton").addEventListener("click", toggleForm);
document.querySelector('.form__add-button').addEventListener('click', handleProjectFormInput);
document.querySelector('.form__cancel-button').addEventListener('click', cancelForm);