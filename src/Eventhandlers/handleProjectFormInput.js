// createProjectFromFormInput
import ProjectModel from "../Project/ProjectModel";

export default function handleProjectFormInput() {

 // create object from form input
 const form = document.querySelector(".form");
 const title = form.querySelector("#title").value;
 const project = new ProjectModel(title);

 // create list item
 const item = document.createElement('li');
 item.textContent = project.title;

 // append item to list
 document.querySelector(".list").prepend(item);

 form.reset();
}