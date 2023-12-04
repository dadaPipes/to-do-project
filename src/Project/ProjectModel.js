// ProjectModel.js

import generateUUID from "../Utils/generateUUID";

class ProjectModel {
  constructor(title) {
    this.id = generateUUID();
    this.title = title;
    this.tasks = [];
  }
 
  addTask(task) {
    this.tasks.push(task);
  }
}

export default ProjectModel;