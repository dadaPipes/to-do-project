// TaskModel.js
import generateUUID from "../Utils/generateUUID";

class TaskModel {
  constructor(title, description, dueDate, priority) {
    this.id = generateUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export default TaskModel;