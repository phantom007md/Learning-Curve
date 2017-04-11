//this is an object litiral pattern witch u create object!
//in this patters we are making an object and this keyword is the object witch
//wraps the methods we are creating and the variables we are making are all
//part of this and it means they all part of the object
(function () {
  //each method inside the people is an api and the method gives us access to
  //edit some of the vars arrays or get some values. so addPerson() and
  //deletePerson()  are the api fo this methods.
  var people = {
    people: ['will', 'steave'],
    init: function () {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    chacheDOM: function () {
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = $('#template');
    },
    bindEvent: function () {
      this.$button.on('click', this.addPerson.bind(this));
      this.$button.delegate('i.dl', 'click', this.addPerson.bind(this));
    },
    render: function () {
      var data = {
        people: this.people
      };
      //some render select and inject happens here.
    },
    addPerson: function () {
      this.people.push(this.$input.val());
      this.render();
      this.$input.val('');
    },
    deletePerson: function () {
      var $remove = $(event.target).closest('li');
      var i = this.$ul.find('ul').index($remove);

      this.people.splice(i, 1);
    }
  }
  people.init();
})();
