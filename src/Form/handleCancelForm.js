import toggleDisplayForm from "./handleToggleDisplayForm";

export default function handleCancelForm() {
  document.querySelector(".form").reset();
  toggleDisplayForm();
}