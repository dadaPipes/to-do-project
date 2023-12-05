import createElementWithClassName from "../Utils/createElementWithClassName";

export function createProjectTitleElement(project) {
  const titleElement = createElementWithClassName('h2', 'project__heading');
  titleElement.textContent = project.title;
  console.log('titleElement: ', titleElement);
  return titleElement;
}