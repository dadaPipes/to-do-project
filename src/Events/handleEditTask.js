export default function handleEditTask(task) {
  console.log(task.title);
  console.log(task.description);
  console.log(task.dueDate);
  console.log(task.priority);
}

/* CSS

.task__description--editable:hover,
.task__due-date-input--editable:hover {
  cursor: text;
}

.task__description--editable:focus,
.task__due-date-input--editable:focus {
  box-shadow: 0 0 2px blue;
} */
