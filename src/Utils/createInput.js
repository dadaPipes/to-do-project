function createInput(type, label, value) {
  const inputLabel = document.createElement('label');
  inputLabel.textContent = `${label}:`;

  const input = document.createElement('input');
  input.type = type;
  input.value = value;

  inputLabel.appendChild(input);

  return inputLabel;
}