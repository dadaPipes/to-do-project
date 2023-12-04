import ProjectModel from "../Project/ProjectModel";
import { createDisplayProjectButton } from "../Form/createDisplayProjectButton";
import ProjectCollection from "../Data/ProjectCollection";
import { createListItemElement } from "../List/createListItemElement";
import handleDisplayProject from "../Form/handleDisplayProject";

export default function initProject() {
  const project = new ProjectModel('Init Title');

  const listItem = createListItemElement();
  const button   = createDisplayProjectButton(project.title);
  ProjectCollection.addProject(project);
  console.log('Collection: ', ProjectCollection.getProjects());

  document.querySelector(".list").prepend(listItem);
  listItem.appendChild(button);

  button.addEventListener('click', handleDisplayProject);
}