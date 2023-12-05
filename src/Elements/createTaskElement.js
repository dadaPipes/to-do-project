import handleToggleDisplayTask from "../Events/handleToggleDisplayTask";

export function createTaskElement(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  
  const titleElement = document.createElement('button');
  titleElement.classList.add('task__heading');
  titleElement.textContent = task.title || 'Default Title';
  titleElement.addEventListener('click', () => handleToggleDisplayTask(titleElement));

  const contentElement = document.createElement('div');
  contentElement.classList.add('task__content');
  contentElement.style.display = 'none';

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('task__description');
  descriptionElement.textContent = task.description || 'Default Description';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('task__label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.htmlFor = 'dueDate';

  const dueDateElement = document.createElement('input');
  dueDateElement.classList.add('task__due-date-input');
  dueDateElement.type = 'date';
  dueDateElement.id = 'dueDate';
  dueDateElement.value = task.dueDate || '';

  const priorityElement = document.createElement('span');
  priorityElement.classList.add('task__priority');
  priorityElement.textContent = `Priority: ${task.priority || 'Default Priority'}`;

  taskElement.appendChild(titleElement);
  taskElement.appendChild(contentElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(dueDateLabel);
  contentElement.appendChild(dueDateElement);
  contentElement.appendChild(priorityElement);

  return taskElement;
}