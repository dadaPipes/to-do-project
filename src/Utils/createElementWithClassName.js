export default function createElementWithClassName(elementType, className) {
  const element = document.createElement(elementType);
  if (className) {
    element.classList.add(className);
  }
  return element;
}