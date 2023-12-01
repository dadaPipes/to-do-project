// ButtonHandler.js
import Project from "./Project";

class ButtonHandler {

  insertElementAfterButton(element) {
    const button = document.querySelector('button');
    const parent = button.parentElement;
    parent.insertBefore(element, button.nextSibling);
  }

  addItemToList(item) {
    const list = document.querySelector('ul');
    list.appendChild(item);
  }

  addFormInputToList(input) {
    const list = document.querySelector('li');
    const item = Project.createProjectELement(input);

    list.appendChild(item);
  }

  cancelFormInput() {

  }
}

export default new ButtonHandler();