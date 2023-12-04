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

  getProjects() {
    return ProjectCollection.projects;
  }
}

export default new ProjectCollection;