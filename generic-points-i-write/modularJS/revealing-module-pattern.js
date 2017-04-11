//in revealing module pattern we dont have a init method.
//the init method is the anonymus function witch runs and create the object.

//in this pattern we dont create the object inside the function.
//we run the function and that function will return an object with the public
//methods and properties.
//so we store that object in a variable and get access to the apis.
var people = (function () {
    var people: ['will', 'steave'],

    //DOM caching
    var $el = $('#peopleModule');
    var $button = this.$el.find('button');
    var $input = this.$el.find('input');
    var $ul = this.$el.find('ul');
    var template = $('#template');

    //bindEvents
    $button.on('click', this.addPerson.bind(this));
    $ul.delegate('i.dl', 'click', this.addPerson.bind(this));

    render();

    render: function () {
      //some render select and inject happens here.
    }
    addPerson: function () {
      people.push(this.$input.val());
      render();
      render();
      $input.val('');
    }
    deletePerson: function () {
      var $remove = $(event.target).closest('li');
      var i = this.$ul.find('ul').index($remove);

      people.splice(i, 1);
      render();
    }
  }
  //we design our code and return only the needed apis and the properties
  //inside a new object and that object will be stored in the variable we
  //assign the anunymos function to.
  return {
    addperson: addperson,
    removePerson: removePerson
  }
})();
