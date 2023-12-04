// createProjectFromFormInput
import Project from "../Models/Project";

export default function handleProjectFormInput() {

 // create object from form input
 const form = document.querySelector(".form");
 const title = form.querySelector("#title").value;
 const project = new Project(title);

 // create list item
 const item = document.createElement('li');
 item.textContent = project.title;

 // append item to list
 document.querySelector(".list").prepend(item);

 form.reset();
}