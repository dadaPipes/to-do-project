import createElementWithClassName from "../Utils/createElementWithClassName";
import ProjectModel from "../Models/ProjectModel";
import { createDisplayProjectButton } from "../Elements/createDisplayProjectButton";
import ProjectCollection from "../Data/ProjectCollection";

export default function handleSubmitForm() {
  const form = document.querySelector('form');
  
  const title = form.querySelector("#title").value;
  const project  = new ProjectModel(title);
  ProjectCollection.addProject(project);


  const listItem = createElementWithClassName('li', 'list__item');
  const button = createDisplayProjectButton(project); console.log('Button: ', button);
  document.querySelector(".list").prepend(listItem);
  listItem.appendChild(button);
  
  form.reset();
}