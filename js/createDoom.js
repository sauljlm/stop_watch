class CreateDoom {

  static element (type, atribute) {
    let element = document.createElement(`${type}`);
    if(atribute) {
      element.setAttribute(`${atribute.type}`, `${atribute.value}`);
    }
    return element;
  }

  static btn(src, atribute) {
    let btn = document.createElement('button');
    if(atribute) {
      btn.setAttribute(`${atribute.type}`, `${atribute.value}`);
    }
    if(src) {
      let icon = document.createElement('img');
      icon.setAttribute('src', `${src}`);
      btn.appendChild(icon);
    }
    return btn;
  }
}