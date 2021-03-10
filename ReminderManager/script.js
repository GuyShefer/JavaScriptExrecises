(function () {


    class Task {
        static counter = 0;
        constructor(text) {
            this.id = Task.counter++;
            this.text = text;
            this.isCompleted = false;
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
            if (task === null) {
                throw new Error('Task is empty');
            }
            else if (task.text.length < 1) {
                throw new Error('Task`s description is empty');
            }
            this.tasks.push(task);
            return 1;
        }

        isTaskExistById(id) {
            let task = this.tasks.find(task => {
                return task.id === id;
            })
            return task;
        }

        getTaskById(taskId) {
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

        marksAsDoneById(taskId) {
            const task = this.getTaskById(taskId);
            task.isCompleted = true;
        }

        unMarksAsDoneById(taskId) {
            task = this.getTaskById(taskId);
            task.isCompleted = true;
        }

        getAllTask() {
            if (this.tasks.length < 1) {
                return 'The Todo list is empty';
            }
            return this.tasks.sort((a, b) => a.isCompleted - b.isCompleted);
        }
    }

    // const reminderManager = new ReminderManager();

    // reminderManager.addTask(new Task('feed the dog')); // create
    // reminderManager.addTask(new Task('buy some T-shirts')); // create
    // reminderManager.addTask(new Task('buy some Jeans')); // create
    // reminderManager.addTask(new Task('buy some underwear')); // create

    // console.log(reminderManager);
    // console.log("~~~~~~~~~~~~~~~~~");
    // console.log(reminderManager.getTaskById(1)) // read

    // reminderManager.updateTaskById(1, 'buy some pants'); // update

    // console.log(reminderManager.getTaskById(1)) // read
    // console.log("~~~~~~~~~~~~~~~~~");
    // console.log(reminderManager);
    // console.log("~~~~~~~~~~~~~~~~~");
    // reminderManager.deleteTaskById(2); // delete
    // reminderManager.marksAsDoneById(1)
    // // console.log(reminderManager);
    // console.log(reminderManager.getAllTask());

    // module.exports = ReminderManager;
    // module.exports = Task;

    module.exports = {
        ReminderManager: ReminderManager,
        Task: Task,
    };

})();