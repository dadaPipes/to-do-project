import createElementWithClassName from "../Utils/createElementWithClassName";
import ProjectModel from "../Models/ProjectModel";
import { createDisplayProjectButton } from "../Elements/createDisplayProjectButton";
import TaskModel from "../Models/TaskModel";

export default function initProject() {
  // Project
  const project = new ProjectModel('Init Title');
  const task1 = new TaskModel('Title 1', 'description 1', 'dueDate 1', 'priority 1');
  const task2 = new TaskModel('Title 2', 'description 2', 'dueDate 2', 'priority 2');
  project.addTask(task1);
  project.addTask(task2);
  console.log('Init Project: ', project);

  const listItem = createElementWithClassName('li', 'list__item');

  const button   = createDisplayProjectButton(project);
  console.log('Button: ', button.dataset);

  document.querySelector(".list").prepend(listItem);
  listItem.appendChild(button);
}
