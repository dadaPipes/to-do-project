export function createTaskElement(title, description, dueDate, priority) {
  const titleElement = document.createElement('h2');
  titleElement.classList.add('task__heading');
  titleElement.textContent = title || 'Default Title';

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('task__description');
  descriptionElement.textContent = description || 'Default Description';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('task__label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.htmlFor = 'dueDate';

  const dueDateElement = document.createElement('input');
  dueDateElement.classList.add('task__due-date-input');
  dueDateElement.type = 'date';
  dueDateElement.id = 'dueDate';
  dueDateElement.value = dueDate || '';

  const priorityElement = document.createElement('span');
  priorityElement.classList.add('task__priority');
  priorityElement.textContent = `Priority: ${priority || 'Default Priority'}`;

  const task = document.createElement('div');
  task.classList.add('task');
  task.appendChild(titleElement);
  task.appendChild(descriptionElement);
  task.appendChild(dueDateLabel);
  task.appendChild(dueDateElement);
  task.appendChild(priorityElement);

  return task;
}