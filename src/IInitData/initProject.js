// initProject.js
import ProjectModel from "../Models/Project";

export default function initProject(title) {
  const project = new ProjectModel(title);

 // create list item
 const item = document.createElement('li');
 item.textContent = project.title;

 // append item to list
 document.querySelector(".list").prepend(item);
}