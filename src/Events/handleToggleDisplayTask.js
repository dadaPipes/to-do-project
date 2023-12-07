export default function handleToggleDisplayTask() {
  const taskContent = button.nextElementSibling;
  taskContent.style.display = taskContent.style.display === "none" ? "block" : "none";
}