import TestClass from "./TestClass"

(function() {
  const para = TestClass.createParagraph();
  const body = document.querySelector('body');
  body.appendChild(para);
})();