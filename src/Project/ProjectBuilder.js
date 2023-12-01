// ProjectBuilder.js

class ProjectBuilder {

  createProjectElement() {
    const project = document.createElement('li');
    project.classList.add('project__item');
    project.textContent = this.createTitleElement();

    return project;    
  }

  createTitleElement(title) {
    const header = document.createElement('h2');
    header.classList.add('project__title');
    header.textContent = title;

    return header;
  }

  createFormElement(submitButton, cancelButton) {
    const form = document.createElement('form');
    form.classList.add('form');
  
    const label = document.createElement('label');
    label.classList.add('form__label');
    label.htmlFor = "title";
  
    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = "text";
    input.id = "title";
    input.name = 'title';
    input.required = true;
  
    form.appendChild(label);
    label.appendChild(input);
    label.appendChild(submitButton);
    label.appendChild(cancelButton);
  
    return form;
  }

  createAddProjectButtonElement() {
    const button = document.createElement('button');
    button.classList.add('project__add-button');
    button.setAttribute('type', 'button');
    button.textContent = 'Add Project';

    return button;
  }

  createSubmitButtonElement() {
    const button = document.createElement('button');
    button.classList.add('form__submit-button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Add';

    return button;
  }

  createCancelButtonElement() {
    const button = document.createElement('button');
    button.classList.add('form__cancel-button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Cancel';
    
    return button;
  }
}

export default new ProjectBuilder();