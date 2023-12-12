class ProjectDisplayBuilder {
  constructor(project) {
    this.project = project;
  }

  buildDisplayProject() {
    const target = document.querySelector('.todolist');
    target.innerHTML = '';
    
    const heading = document.createElement('h4');
    heading.classList.add('.todolist__heading');
    heading.textContent = this.project.title;

    const list = document.createElement('ul');
    list.classList.add('.tasks');

    // Create a list item for each task
    this.project.tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.classList.add('task');

        const taskHeading = document.createElement('p');
        taskHeading.classList.add('task__heading');
        taskHeading.textContent = task.title;

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task__description');
        taskDescription.textContent = task.description;

        const taskDueDate = document.createElement('time');
        taskDueDate.classList.add('task__dueDate');
        taskDueDate.textContent = `Due Date: ${task.dueDate || 'Not specified'}`;

        const priorityLabel = document.createElement('label');
        priorityLabel.classList.add('task__priority-label');
        priorityLabel.textContent = 'Priority:';

        const prioritySelect = document.createElement('select');
        prioritySelect.classList.add('task__priority');
        prioritySelect.name = 'priority';

        // Populate priority options
        task.priority.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            prioritySelect.appendChild(option);
        });

        // Set the selected option based on the project's task priority
        prioritySelect.value = task.priority;

        // Append elements to the list item
        listItem.appendChild(taskHeading);
        listItem.appendChild(taskDescription);
        listItem.appendChild(taskDueDate);
        listItem.appendChild(priorityLabel);
        listItem.appendChild(prioritySelect);

        list.appendChild(listItem);
    });

    target.appendChild(heading);
    target.appendChild(list);
  }
}

export default ProjectDisplayBuilder;