// ProjectBuilder.js
import Form from "./Form";

class ProjectBuilder {
    createProjectElement() {
      const aside = document.querySelector('aside');
      const container         = this.createContainer();
      const heading           = this.createHeading();
      const form              = Form.createFormElement();
      const displayFormButton = this.createDisplayElementButton(form);
      const list              = this.createList();
      
      const item = this.createProjectELement('Init Project Title');
      
      aside.appendChild(container);
      container.appendChild(heading);
      container.appendChild(displayFormButton);
      container.appendChild(list);
      list.appendChild(item);
    }

    createContainer() {
      const container = document.createElement('div');
      container.classList.add('project');

      return container;
    }

    createHeading() {
      const heading = document.createElement('h2');
      heading.classList.add('project__heading');
      heading.textContent = 'Projects';

      return heading;
    }

    createDisplayElementButton(element) {
      const button = document.createElement('button');
      button.textContent = 'Add Project';
      button.classList.add('project__display-form-button');
      button.setAttribute('type', 'button');
      button.addEventListener('click', () => this.insertElementAfterButton(element));
  
      return button;
    }

    createList() {
      const list = document.createElement('ul');
      list.classList.add('list');
  
      return list;
    }

    createProjectELement(title) {
      const project = document.createElement('li');
      project.classList.add('list__item')
      project.textContent = title;
      return project;
    }

    insertElementAfterButton(element) {
      const button = document.querySelector('button');
      const parent = button.parentElement;
      parent.insertBefore(element, button.nextSibling);
    }
}

export default new ProjectBuilder();