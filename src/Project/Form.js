// Form.js

class Form {
  createFormElement() {
    const form = this.createForm();
    const title = this.createTitle();
    const addButton = this.createAddButton();
    const cancelButton = this.createCancelButton();
  
    form.appendChild(title);
    form.appendChild(addButton);
    form.appendChild(cancelButton);
  
    return form;
  }

  createForm() {
    const form = document.createElement('form');
    form.classList.add('form');

    return form;
  }

  createTitle() {
    const title = document.createElement('div');
    title.classList.add('form__group');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.htmlFor = "title";
  
    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = "text";
    input.id = "title";
    input.name = 'title';
    input.required = true;

    title.appendChild(label)
    title.appendChild(input);

    return title;
  }

  createAddButton() {
    const button = document.createElement('button');
    button.classList.add('form__add-button');
    button.setAttribute('type', 'button'); 
    button.textContent = 'Add';
    button.addEventListener('click', () => this.handleFormInputToProject());
    
    return button;
  }

  handleFormInputToProject() {
      const input = document.getElementById("title");
      const title = input.value;
      const project = this.createProjectELement(title);
      const list = document.querySelector('.list');
      list.appendChild(project);
  };
  

  createCancelButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('form__cancel-button');
    button.textContent = 'Cancel';

    return button;
  }

  createProjectELement(title) {
    const project = document.createElement('li');
    project.classList.add('list__item')
    project.textContent = title;
    return project;
  }
}

export default new Form();