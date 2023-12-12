import '../styles/FormHandler.css'
import ProjectModel from '../Models/ProjectModel';
import ProjectCollection from '../Data/ProjectCollection';
import ProjectBuilder from '../Projects/ProjectListBuilder';

class FormHandler {
  
  handleFormEvents() {
    document.querySelector('.form').addEventListener('click', (event) => {
      const clickedElement = event.target;

      if(clickedElement.classList.contains('form__display')) {
        this.handleDisplay();
      }
      if(clickedElement.classList.contains('form__submit')) {
        this.handleSubmit();
      }
      if(clickedElement.classList.contains('form__cancel')) {
        this.handleCancel();
      }
    })
  };

  handleDisplay() {
    const form = document.querySelector('.form__content');
    form.classList.toggle('form__content--visible');
  }
  
  handleSubmit() {
    const titleInput = document.querySelector('#title');
    const title = titleInput.value;
    if(title === '') { 
      alert('field can not be empty');
      return;
    };
    
    const project = new ProjectModel(title);
    const projectElement = new ProjectBuilder(project).buildListProject();
  
    document.querySelector('.projects').prepend(projectElement);
    ProjectCollection.addProject(project);

    const form = document.querySelector('.form__content');
    form.reset();
    form.classList.toggle('form__content--visible');
  }
  
  handleCancel() {
    const form = document.querySelector('.form__content');
    form.classList.toggle('form__content--visible');
    form.reset();
  }
}

export default FormHandler;

