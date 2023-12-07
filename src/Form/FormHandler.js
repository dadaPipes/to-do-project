import ProjectModel from '../Models/ProjectModel';
import ProjectCollection from '../Data/ProjectCollection';

class FormHandler {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDisplay() {
    const button = document.querySelector('.form__button--display');
    button.addEventListener('click', () => {
      const form = document.querySelector('.form__content');
      form.style.display = form.style.display === "none" ? "block" : "none";
    });
  }

  handleSubmit() {
    const button = document.querySelector('.form__submit');
    button.addEventListener('click', () => {
      const titleInput = document.querySelector('#title');
      const title = titleInput.value;
      if(title === '') { 
        alert('field can not be empty');
        return;
      };
      const project = new ProjectModel(title);
      ProjectCollection.addProject(project);
      const button = this.createProjectButton(project);
      this.addButtonToList(button);

      const form = document.querySelector('.form__content');
      form.reset();
    });
  }

  createProjectButton(project) {
    const button = document.createElement('button');
    button.classList.add('form-list__item');
    button.type = 'button';
    button.innerText = project.title;
    button.id = project.id;
    console.log('button id:', button.id);
    button.addEventListener('click', (event) => this.handleDisplayProject(event.target.id));

    return button;
  }

  handleDisplayProject(buttonId) {
    const project = ProjectCollection.getProjectById(buttonId);
    console.log('Found project: ', project);
    
    const target = document.querySelector('.project');
    target.innerHTML = '';
    
    const heading = document.createElement('h4');
    heading.classList.add('.project__heading');
    heading.textContent = project.title;

    const list = document.createElement('ul');
    list.classList.add('.task-list');

    // Create a list item for each task
    project.tasks.forEach(task => {
        console.log('Task: ', task);
        const listItem = document.createElement('li');
        listItem.classList.add('task-list__item');

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

        // Append the list item to the task list
        list.appendChild(listItem);
    });

    target.appendChild(heading);
    target.appendChild(list);
  }

  addButtonToList(button) {
    const list = document.querySelector('.form__list');
    list.prepend(button);
  }

  handleCancel() {
    const button = document.querySelector('.form__cancel');
    button.addEventListener('click', () => {
      const form = document.querySelector('.form__content');
      form.style.display = form.style.display === "none" ? "block" : "none";
      form.reset()
    });
  }
}

export default FormHandler;
