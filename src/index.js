// index.js
import ProjectHandler from "./Project/ProjectHandler";
import ProjectBuilder from "./Project/ProjectBuilder";

const projectContainer = document.querySelector('.project');

const submitButton = ProjectBuilder.createSubmitButtonElement();
submitButton.addEventListener('click', () => ProjectHandler.handleSubmit());

const cancelButton = ProjectBuilder.createCancelButtonElement();
cancelButton.addEventListener('click', () => ProjectHandler.handleCancel());

const form = ProjectBuilder.createFormElement(submitButton, cancelButton);

const adProjectbutton = ProjectBuilder.createAddProjectButtonElement();
adProjectbutton.addEventListener('click', () => ProjectHandler.handleAddProject(form));

projectContainer.appendChild(adProjectbutton);