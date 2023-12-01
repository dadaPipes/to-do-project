// ProjectBuilder.js
import ListBuilder from "./ListBuilder";
import ButtonBuilder from "./ButtonBuilder";
import Project from "./Project";
import FormBuilder from "./FormBuilder";

class ProjectBuilder {
    createProjectElement() {
      const aside = document.querySelector('aside');

      const container = document.createElement('div');
      container.classList.add('project');

      const heading = document.createElement('h2');
      heading.classList.add('project__heading');
      heading.textContent = 'Projects';

      const form = FormBuilder.createFormElement();

      const addProjectButton = ButtonBuilder.createDisplayElementButton(form, container);
      addProjectButton.classList.add('project__add-button');
      addProjectButton.textContent = 'Add Project';

      const list = ListBuilder.createList();
      list.classList.add('list');

      const item = Project.createProjectELement('Init Project Title');
      item.classList.add('list__item');
      
      aside.appendChild(container);
      container.appendChild(heading);
      container.appendChild(addProjectButton);
      container.appendChild(list);
      list.appendChild(item);
    }
}

export default new ProjectBuilder();