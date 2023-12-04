import ProjectModel from "../Project/ProjectModel";

export function createProjectFromForm() {
 const form = document.querySelector(".form");
 const title = form.querySelector("#title").value;
 const project = new ProjectModel(title);

 return project;
}