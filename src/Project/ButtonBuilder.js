// ButtonBuilder.js
import ButtonHandler from "./ButtonHandler";

class ButtonBuilder {

  createDisplayElementButton(element) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => ButtonHandler.insertElementAfterButton(element));

    return button;
  }

  createAddItemToListButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => ButtonHandler.addItemToList(item));

    return button;
  }

  createAddButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => ButtonHandler.addFormInputToList());

    return button;
  }

  createCancelButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');

    
    return button;
  }
}

export default new ButtonBuilder();