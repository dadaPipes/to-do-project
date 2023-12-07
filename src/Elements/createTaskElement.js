import handleToggleDisplayTask from "../Events/handleToggleDisplayTask";
import handleEditTask from "../Events/handleEditTask";

export function createTaskElement(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  
  const titleElement = document.createElement('button');
  titleElement.classList.add('task__heading--display');
  titleElement.type = "button";
  titleElement.textContent = task.title || 'Default Title';
  titleElement.contentEditable = 'false';
  titleElement.addEventListener('click', () => handleToggleDisplayTask());

  const editButton = document.createElement('button');
  editButton.classList.add('task__edit-button');
  editButton.type = "button";
  editButton.textContent = 'edit';
  editButton.addEventListener('click', () => handleEditTask(task));

  const contentElement = document.createElement('div');
  contentElement.classList.add('task__content');
  contentElement.style.display = 'none';

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('task__description--editable');
  descriptionElement.textContent = task.description || 'Default Description';
  descriptionElement.contentEditable = 'false';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('task__label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.htmlFor = 'dueDate';

  const dueDateElement = document.createElement('input');
  dueDateElement.classList.add('task__due-date-input--editable');
  dueDateElement.type = 'date';
  dueDateElement.id = 'dueDate';
  dueDateElement.value = task.dueDate || '';
  dueDateElement.contentEditable = 'false';

  const priorityElement = document.createElement('span');
  priorityElement.classList.add('task__priority--editable');
  priorityElement.textContent = task.priority || 'Default Priority';
  priorityElement.contentEditable = 'false';

  taskElement.appendChild(titleElement);
  taskElement.appendChild(editButton);
  taskElement.appendChild(contentElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(dueDateLabel);
  contentElement.appendChild(dueDateElement);
  contentElement.appendChild(priorityElement);

  return taskElement;
}