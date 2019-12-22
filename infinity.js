class infiteScroll {
  constructor(target) {
    this.target = document.querySelector(target);
    this.nextCount = 0;
    this.init();
  }
  variable() {

  }
  init() {
    this.bindEvent();
    
  }
  bindEvent() {
    this.appendEvt();
  }
  observer() {
    const io = new IntersectionObserver(callbakc, {
      root: this.target,
    });
  }
  appendEvt() {
    for (let i=0;i<20;i++) {
      const item = document.createElement('li');
      item.innerText = 'Item ' + this.nextCount++;
      this.target.appendChild(item);
    }
  }
}



// 높이값
// append 할 dom
// append 할 list 갯수
// createDocumentFragment
// IntersectionObserver