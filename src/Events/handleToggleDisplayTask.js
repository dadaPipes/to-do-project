export default function handleToggleDisplayTask(button) {
  const taskContent = button.nextElementSibling;
  taskContent.style.display = taskContent.style.display === "none" ? "block" : "none";
}