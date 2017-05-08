var events = {
  events:{
    'onPeopleChanged': [someHandler, someOtherHandler]
  },
  //this method can be on
  subscribe: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  // this method can be off
  distroy: function (eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  // this method can be emit
  publish: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => (fn(data)));
    }
  }
}

// function add(x=5, y) {
//   x = x || 5 // will assign eather side is true
//   x = x && 5 // if x is true will asign 5 to x
// }
