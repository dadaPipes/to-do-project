import handleDisplayProject from "./handleDisplayProject";

export function createDisplayProjectButton(title) {
 const button = document.createElement('button');
 button.classList.add('list__button');
 button.type = 'button';
 button.textContent = title;
 button.addEventListener('click', handleDisplayProject);
 return button;
}