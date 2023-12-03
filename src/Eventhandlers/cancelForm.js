// cancelForm
import toggleForm from "./toggleForm";

export default function cancelForm() {
  document.querySelector(".form").reset();
  toggleForm();
}