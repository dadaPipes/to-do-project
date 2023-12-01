// FormBuilder.js
import ButtonBuilder from "./ButtonBuilder";
import Project from "./Project";

class FormBuilder {
  createFormElement() {
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
  
    const addButton = ButtonBuilder.createAddButton();
    addButton.classList.add('form__add-button');
    addButton.textContent = 'Add';

    const cancelButton = ButtonBuilder.createCancelButton();
    cancelButton.classList.add('form__cancel-button');
    cancelButton.textContent = 'Cancel';

    form.appendChild(label);
    label.appendChild(input);
    label.appendChild(addButton);
    label.appendChild(cancelButton);
  
    return form;
  }
}

export default new FormBuilder();