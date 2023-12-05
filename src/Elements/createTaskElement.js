export function createTaskElement(task) {
  const titleElement = document.createElement('h4');
  titleElement.classList.add('task__heading');
  titleElement.textContent = task.title || 'Default Title';

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

  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  taskElement.appendChild(titleElement);
  taskElement.appendChild(descriptionElement);
  taskElement.appendChild(dueDateLabel);
  taskElement.appendChild(dueDateElement);
  taskElement.appendChild(priorityElement);

  return taskElement;
}