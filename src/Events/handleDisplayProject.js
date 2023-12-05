import { createProjectTitleElement } from "../Elements/createProjectElement";
import { createTaskElement } from "../Elements/createTaskElement";

export default function handleDisplayProject(project) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const projectTitleElement = createProjectTitleElement(project);
  main.appendChild(projectTitleElement);

  project.tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    main.appendChild(taskElement);
  });
}