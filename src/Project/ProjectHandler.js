// ProjectHandler.js

class ProjectHandler {

  handleAddProject(form) {
    const projectList = document.querySelector('.project');
    projectList.appendChild(form);
  }

  handleSubmit() {
    
  }

  handleCancel() {

  }
}

export default new ProjectHandler();