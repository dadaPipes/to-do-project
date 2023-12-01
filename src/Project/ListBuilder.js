// ListBuilder.js

class ListBuilder {

  createList() {
    const list = document.createElement('ul');
    list.classList.add('list');

    return list;
  }
  
  createItem() {
    const item = document.createElement('li');
    item.classList.add('list__item');

    return project;
  }
}

export default new ListBuilder();