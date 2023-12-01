// Project.js

class Project {
  createProjectELement(title) {
      const project = document.createElement('li');
      project.textContent = title;
      return project;
  }
}

export default new Project();