class ProjectCollection {
  static instance = null;
  static projects = [];

  constructor() {
    if (!ProjectCollection.instance) {
      ProjectCollection.instance = this;
    }

    return ProjectCollection.instance;
  }

  addProject(project) {
    ProjectCollection.projects.push(project);
  }

  getProjectByTitle(title) {
    const project = ProjectCollection.projects.find(project => project.title === title)
    if(project === 'undefined') { 
      alert('project does not exist')
      return 
    };
    return project;
  }

  getProjects() {
    return ProjectCollection.projects;
  }

  deleteProjectByTitle(title) {
    ProjectCollection.projects = ProjectCollection.projects.filter(project => project.title !== title);
  }

  updateProject(title, newTitle) {
    ProjectCollection.projects = ProjectCollection.projects.map(project => 
      project.title === title ? {...project, title: newTitle} : project
    );
   }   
}

export default new ProjectCollection;