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

  getProjectById(id) {
    const project = ProjectCollection.projects.find(project => project.id === id)
    if(project === 'undefined') { 
      alert('project does not exist')
      return 
    };
    return project;
  }

  getProjects() {
    return ProjectCollection.projects;
  }
}

export default new ProjectCollection;