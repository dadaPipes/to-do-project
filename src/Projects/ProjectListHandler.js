import '../styles/projects.css'
import ProjectCollection from "../Data/ProjectCollection";
import ProjectDisplayBuilder from './ProjectDisplayBuilder';

class ProjectListHandler {
  handleProjectListEvents() {
    document.querySelector('.projects').addEventListener('click', (event) => {
      const clickedElement = event.target;
      const listItem = clickedElement.closest('.projects__project');
      
      if (clickedElement.classList.contains('projects__display')) {
        this.handleDisplayProject(listItem);
      } 
      else if (clickedElement.classList.contains('projects__expand')) {
        this.handleExpand(listItem);
      } 
      else if (clickedElement.classList.contains('projects__delete')) {
        this.handleDeleteProject(listItem);
      } 
      else if (clickedElement.classList.contains('projects__edit')) {
        this.handleEditProject(listItem);
      } 
      else if (clickedElement.classList.contains('edit-form__submit')) {
        this.handleSubmitProject(listItem);
      } 
      else if (clickedElement.classList.contains('edit-form__cancel')) {
        this.handleCancelProject(listItem);
      }
    });
  }

  handleDisplayProject(listItem) {
    const projectTitle = listItem.querySelector('.projects__display').innerText;
    const project = ProjectCollection.getProjectByTitle(projectTitle);
    new ProjectDisplayBuilder(project).buildDisplayProject();
  }

  handleExpand(listItem) {
    const deleteButton = listItem.querySelector('.projects__delete');
    deleteButton.classList.toggle('projects__delete--visible');
   
    const editButton = listItem.querySelector('.projects__edit');
    editButton.classList.toggle('projects__edit--visible');
   }

  handleDeleteProject(listItem) {
    const projectTitle = listItem.querySelector('.projects__display').innerText;
    ProjectCollection.deleteProjectByTitle(projectTitle);

    listItem.remove();
    
    const displayedProject = document.querySelector('.todolist');
    displayedProject.textContent = '';
  }

  handleEditProject(listItem) {
    const form = listItem.querySelector('.edit-form');
    form.classList.toggle('edit-form--visible');
    
    const displayButton = document.querySelector('.projects__display');
    displayButton.classList.toggle('projects__display--hidden');

    const expandButton = listItem.querySelector('.projects__expand');
    expandButton.classList.toggle('projects__expand--hidden');
    
    const deleteButton = listItem.querySelector('.projects__delete');
    deleteButton.classList.toggle('projects__delete--visible');
    
    const editButton = listItem.querySelector('.projects__edit');
    editButton.classList.toggle('projects__edit--visible');
  }

  handleSubmitProject() {
    ProjectCollection.updateProject(title, newTitle);
  }

  handleCancelProject(listItem) {
    const form = listItem.querySelector('.edit-form');
    form.classList.toggle('edit-form--visible');
    
    const displayButton = document.querySelector('.projects__display');
    displayButton.classList.toggle('projects__display--hidden');

    const expandButton = listItem.querySelector('.projects__expand');
    expandButton.classList.toggle('projects__expand--hidden');
  }

  toggleVisibility(element, classToAdd, classToRemove) {
    if (element) {
      element.classList.remove(classToRemove);
      element.classList.add(classToAdd);
    }
  }
}

export default ProjectListHandler;