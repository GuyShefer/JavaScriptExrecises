(function () {

    class Task {
        static counter = 0;
        constructor(text, importance) {
            this.id = Task.counter++;
            this.text = text;
            this.isCompleted = false;
            this.importance = importance;
            this.timeCreated = new Date();
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
                throw new Error('You have not changed anything');
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
                throw new Error('The Todo list is empty');
            }
            return this.tasks.sort((a, b) => a.isCompleted - b.isCompleted);
        }

        getAllTasksSortedByDones() {
            if (this.tasks.length < 1) {
                throw new Error('The Todo list is empty');
            }
            return this.tasks.sort((a, b) => b.isCompleted - a.isCompleted);
        }

        getAllTasksSortedByImportance() {
            if (this.tasks.length < 1) {
                throw new Error('The Todo list is empty');
            }
            return this.tasks.sort((a, b) => a.importance.charCodeAt(0) - b.importance.charCodeAt(0));
        }
        getAllSortedByDate() {
            if (this.tasks.length < 1) {
                throw new Error('The Todo list is empty');
            }
            return this.tasks.sort((a, b) => a.timeCreated - b.timeCreated);
        }

    }

    const addNewTaskBtn = document.querySelector('.submit');
    let textInput = document.querySelector('#text');
    const form = document.querySelector("#form");
    const dropDown = document.querySelector('#importance');
    const table = document.querySelector('#table-body');
    let reminderManager = JSON.parse(localStorage.getItem('todo-list'));

    if (reminderManager === null) {
        reminderManager = new ReminderManager();
    }

    // console.log(textInput);
    addNewTaskBtn.addEventListener('click', () => {
        const text = textInput.value; // text value
        const importance = dropDown.value; // A,B,C
        const task = new Task(text, importance);
        reminderManager.addTask(task);
        displayTaskInTheTable(task);
        form.reset(); // clear the form
    })

    const displayTaskInTheTable = task => {
        console.log(table);
        table.innerHTML += 
        `<td>${task.text}</td>
        <td>${task.isCompleted}</td>
        <td>${task.importance}</td>
        <td>${task.timeCreated}</td>
        <td onclick="updateTask(1)"><i class="far fa-edit"></i></td>
        <td onclick="deleteTask(1)"><i class="far fa-minus-square"></i></td>`
    }

    // reminderManager.addTask(new Task('feed the dog', 'A')); // create
    // reminderManager.addTask(new Task('buy some T-shirts', 'B')); // create
    // reminderManager.addTask(new Task('buy some Jeans', 'A')); // create
    // reminderManager.addTask(new Task('buy some underwear', 'C')); // create

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
    // // console.log('asd',reminderManager.getAllTask());
    // console.log(reminderManager.getAllTasksSortedByDones()); // sort by done to undone
    // console.log(reminderManager.getAllTasksSortedByImportance()); // sort by Importance
    // // console.log(reminderManager.getAllSortedByDate()); // have to check if works

})();