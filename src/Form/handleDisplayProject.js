import ProjectCollection from "../Data/ProjectCollection";
import { createProjectElement } from "../Project/createProjectElement";

export default function handleDisplayProject(event) {
  const projects = ProjectCollection.getProjects();
 
  const buttonText = event.target.textContent;
  const project = projects.find(element => {
    if (element.title === buttonText) {
      return element.title;
    }
  });
 
  const main = document.querySelector('main');
  const projectElement = createProjectElement(project.title);

  main.appendChild(projectElement);
 }