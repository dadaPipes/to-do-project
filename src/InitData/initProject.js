import ProjectModel from "../Models/ProjectModel";
import TaskModel from "../Models/TaskModel";

export default function initProject() {
  const project = new ProjectModel('Init Project Heading');
  const task1 = new TaskModel('Title 1', 'description 1', 'dueDate 1', 'priority 1');
  const task2 = new TaskModel('Title 2', 'description 2', 'dueDate 2', 'priority 2');
  project.addTask(task1);
  project.addTask(task2);

  return project;
}
