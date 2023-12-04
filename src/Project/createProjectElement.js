export function createProjectElement(title) {
  const project = document.createElement('h2');
  project.classList.add('project__heading');
  project.textContent = title;

  return project;
}