class infiteScroll {
  constructor(target) {
    this.target = target;
    this.init();
  }
  init() {
    this.bindEvent();
  }
  bindEvent() {
    console.log('aa');
  }
}

const scrollE = new infiteScroll();

// 높이값
// append 할 dom
// append 할 list 갯수
