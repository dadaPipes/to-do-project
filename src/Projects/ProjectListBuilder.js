class ProjectListBuilder {
  constructor(project) {
    this.project = project;
  }

  buildListProject() {
    const projectElement = this.createListElement();
    const buttonDisplay  = this.createDisplayProjectButton();
    const buttonExpand   = this.createExpandButton();
    const buttonDelete   = this.createDeleteProjectButton();
    const buttonEdit     = this.createEditProjectButton();
    const editForm       = this.editFormBuilder();

    projectElement.appendChild(editForm);
    projectElement.appendChild(buttonDisplay);
    projectElement.appendChild(buttonExpand);
    projectElement.appendChild(buttonDelete);
    projectElement.appendChild(buttonEdit);

    return projectElement;
   }   

  createListElement() {
    const listElement = document.createElement('li');
    listElement.classList.add('projects__project');
    return listElement
  }

  createDisplayProjectButton() {
    const button     = document.createElement('button');
    button.classList.add('projects__display');
    button.type      = 'button';
    button.innerText = this.project.title;
    return button;
  }

  createExpandButton() {
    const button     = document.createElement('button');
    button.classList.add('projects__expand');
    button.type      = 'button';
    button.innerText = 'expand';
    return button;
  }

  createDeleteProjectButton() {
    const button     = document.createElement('button');
    button.classList.add('projects__delete');
    button.type      = 'button';
    button.innerText = 'delete';
    return button;
  }

  createEditProjectButton() {
    const button     = document.createElement('button');
    button.classList.add('projects__edit');
    button.type      = 'button';
    button.innerText = 'edit';
    return button;
  }

  editFormBuilder() {
    const form         = this.createForm();
    const titleLabel   = this.createTitleLabel();
    const titleInput   = this.createTitleInput();
    const submitButton = this.createSubmitButton();
    const cancelButton = this.createCancelButton();

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    return form;
  }

  createForm() {
    const form = document.createElement('form');
    form.classList.add('edit-form');
    return form;
  }

  createTitleLabel() {
    const label     = document.createElement('label');
    label.classList.add('edit-form__label');
    label.innerText = 'New Content';
    label.for       = 'edit-title';
    return label;
  }

  createTitleInput() {
    const input       = document.createElement('input');
    input.classList.add('edit-form__title');
    input.id          = 'edit-title';
    input.type        = 'text';
    input.name        = 'edit project title';
    input.placeholder = 'Enter new content';
    return input
  }

  createSubmitButton() {
    const submitButton     = document.createElement('button');
    submitButton.classList.add('edit-form__submit');
    submitButton.type      = 'button';
    submitButton.innerText = 'Save';
    return submitButton;
  }

  createCancelButton() {
    const cancelButton     = document.createElement('button');
    cancelButton.classList.add('edit-form__cancel');
    cancelButton.type      = 'button';
    cancelButton.innerText = 'cancel';
    return cancelButton;
  }
}

export default ProjectListBuilder;