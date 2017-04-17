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

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
    console.log('notifying important people');
};

urgentTask.complete();
//in this section we just modified the save method and added an extra 
//functionality to the save method.
//we added a method (notify) and called the save() method from the original
//task object with call() method and padded this to change the this to 
//urgantTask object context.
urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this)
};

urgentTask.save();
