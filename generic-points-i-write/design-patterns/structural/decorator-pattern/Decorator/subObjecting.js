var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//wrapping the urgentTask object in an function and creating a new object 
//decorated from the task object.
var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
};
//create a brand new prototype for the object we are making from decorating the
//task object
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('notifying important people');
};
UrgentTask.prototype.save = function () {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this)
};
var ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log(ut);
