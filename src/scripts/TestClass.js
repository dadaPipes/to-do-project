class TestClass {
  
  createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'hello there';
    
    return para;
  }
}

export default new TestClass();