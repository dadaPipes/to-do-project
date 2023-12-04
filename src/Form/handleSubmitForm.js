import { createProjectFromForm } from "./createProjectFromForm";
import { createDisplayProjectButton } from "./createDisplayProjectButton";
import ProjectCollection from "../Data/ProjectCollection";
import { createListItemElement } from "../List/createListItemElement"; 

export default function handleSubmitForm() {
  const form = document.querySelector('form');

  const project  = createProjectFromForm();
  const listItem = createListItemElement();
  const button   = createDisplayProjectButton(project.title);
  
  ProjectCollection.addProject(project);

  document.querySelector(".list").prepend(listItem);
  listItem.appendChild(button);
  
  form.reset();
}