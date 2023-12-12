import generateUUID from "../Utils/generateUUID";
import TaskModel from "./TaskModel";

class ProjectModel {
  constructor(title) {
    this.id = generateUUID();
    this.title = title;
    this.tasks = [ 
      new TaskModel(
        'Default Title', 
        'Default Description', 
        'Default Due Date', 
        ['low', 'medium', 'high', 'ON FIRE'])
    ]
  }
 
  addTask(task) {
    this.tasks.push(task);
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id === id);
  }
  
  updateProject(project, newProject) {
    return project = newProject;
  }
}

export default ProjectModel;