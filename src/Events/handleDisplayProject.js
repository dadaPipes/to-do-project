import { createProjectElement } from "../Elements/createProjectElement";
import { createTaskElement } from "../Elements/createTaskElement";

export default function handleDisplayProject(project) {
  const projectTitleElement = createProjectElement(project);

    const tasks = project.tasks.map(createTaskElement);

    const main = document.querySelector('main');
    
    main.appendChild(projectTitleElement);
    tasks.forEach(task => {
      const taskElement = createTaskElement(task.title, task.description, task.dueDate, task.priority);
      main.appendChild(taskElement);
    });
}
