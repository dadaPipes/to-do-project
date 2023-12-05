import createElementWithClassName from "../Utils/createElementWithClassName";

export function createProjectElement(project) {
  const titleElement = createElementWithClassName('h2', 'project__heading');
  titleElement.textContent = project.title;
  
  return titleElement;
}