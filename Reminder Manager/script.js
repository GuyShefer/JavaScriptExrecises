(function () {

    class Task {
        static counter = 0;
        constructor(text) {
            this.id = Task.counter++;
            this.text = text;
        }

        setText(text) {
            this.text = text;
        }
    }

    class ReminderManager {
        constructor() {
            this.tasks = [];
        }

        addTask(task) {
            // have to check if the task isnt exist
            // have to check if the task isnt null
            // have to check if the task's description isnt empty
            if (task === null) {
                throw new Error('Task is empty');
            }
            else if (task.text.length < 1) {
                throw new Error('Task`s description is empty');
            }
            this.tasks.push(task);
        }

        isTaskExistById(id) {
            let task = this.tasks.find(task => {
                return task.id === id;
            })
            return task;
        }

        getTaskById(taskId) {
            // have to check if the id is more then 0
            // have to check if the id exist.
            // have to return the task from the list
            const task = this.isTaskExistById(taskId);
            if (taskId < 0) {
                throw new Error('Task id can not be negative');
            }
            else if (taskId === null) {
                throw new Error('Task id is empty');
            }
            else if (task === undefined) {
                throw new Error('Task is not Exist');
            }
            return task;
        }

        updateTaskById(taskId, text) {
            // get the task from the function  > getTask
            // check if the new task description is not empty
            // replace the tasks in the arr.
            const task = this.getTaskById(taskId);
            if (text === null || text.length < 1) {
                throw new Error('Text is empty');
            }
            if (task.text === text) {
                throw new Error('You have not changed anything')
            }
            task.setText(text);
        }

        deleteTaskById(taskId) {
            const currentTask = this.getTaskById(taskId);
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i] === currentTask) {
                    this.tasks.splice(i, 1);
                }
            }
        }
    }

    const reminderManager = new ReminderManager();

    reminderManager.addTask(new Task('feed the dog')); // create
    reminderManager.addTask(new Task('buy some T-shirts')); // create

    console.log(reminderManager);
    console.log("~~~~~~~~~~~~~~~~~");
    console.log(reminderManager.getTaskById(1)) // read

    reminderManager.updateTaskById(1, 'buy some pants'); // update

    console.log(reminderManager.getTaskById(1)) // read
    console.log("~~~~~~~~~~~~~~~~~");
    console.log(reminderManager);
    console.log("~~~~~~~~~~~~~~~~~");
    reminderManager.deleteTaskById(0); // delete
    console.log(reminderManager);
})();