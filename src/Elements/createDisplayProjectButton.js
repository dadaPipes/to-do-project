import handleDisplayProject from "../Events/handleDisplayProject";

export function createDisplayProjectButton(project) {
 const button = document.createElement('button');
 button.classList.add('list__button');
 button.type = 'button';
 button.innerText = project.title;

 button.dataset.project = JSON.stringify(project);
 console.log('dataset: ', button.dataset.project);

 button.addEventListener('click', () => handleDisplayProject(project));

 return button;
}