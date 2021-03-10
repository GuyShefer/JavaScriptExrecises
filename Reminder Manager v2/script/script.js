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

        updateTaskById(taskId, text, isCompleted) {
            const task = this.getTaskById(taskId);
            // if (text === null || text.length < 1) {
            //     throw new Error('Text is empty');
            // }
            // if (task.text === text) {
            //     throw new Error('You have not changed anything');
            // }
            task.setText(text);
            task.isCompleted = isCompleted;
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
    const modal = document.querySelector("#myModal");
    const span = document.querySelector(".close");
    const updateText = document.querySelector('#update-text');
    const updateIsCompleted = document.querySelector('#update-completed');

    if (reminderManager === null) {
        reminderManager = new ReminderManager();
        console.log( reminderManager instanceof ReminderManager);
    } 
    else {
        let docs = reminderManager;
        reminderManager = new ReminderManager();
        Object.assign(reminderManager, docs)
        console.log(reminderManager);
    }
    console.log( reminderManager instanceof ReminderManager);
    printAllTheTable();
    

    addNewTaskBtn.addEventListener('click', () => {
        const text = textInput.value; // text value
        const importance = dropDown.value; // A,B,C
        const task = new Task(text, importance);
        reminderManager.addTask(task);
        printAllTheTable();
        localStorage.setItem('todo-list', JSON.stringify(reminderManager));
        // have to override the local storage object
        form.reset(); // clear the form
        
    })

    function printAllTheTable() {
        table.innerHTML = `<tr>
        <th>Description</th>
        <th>Completed</th>
        <th>Importance</th>
        <th>Date</th>
        <th>Update</th>
        <th>Delete</th>
    </tr>`;
        reminderManager.tasks.forEach(task => {
            table.innerHTML +=
                `<td>${task.text}</td>
        <td>${task.isCompleted}</td>
        <td>${task.importance}</td>
        <td>${task.timeCreated.toLocaleString()}</td>
        <td onclick="updateTask(${task.id})"><i class="far fa-edit"></i></td>
        <td onclick="deleteTask(${task.id})"><i class="far fa-minus-square"></i></td>`
        })
    }



    updateTask = (id) => {
        modal.style.display = "block"; // open modal
        updateText.value = '';
        updateTaskById = () => {
            console.log(updateText.value, updateIsCompleted.checked);
            reminderManager.updateTaskById(id, updateText.value, updateIsCompleted.checked);
            printAllTheTable();
            modal.style.display = "none";
        }
        
        updateIsCompleted.checked = false;
        localStorage.setItem('todo-list', JSON.stringify(reminderManager));
        // have to override the local storage object and print all the table
    }


    deleteTask = (id) => {
        reminderManager.deleteTaskById(id);
        printAllTheTable();
        localStorage.setItem('todo-list', JSON.stringify(reminderManager));
        // have to override the local storage object and print all the table
    }

    const sortListBtn = document.querySelector('#sort-list-btn');
    const sortDropDown = document.querySelector('#sort');
    sortListBtn.addEventListener('click', () => {
        const sortOption = sortDropDown.value;
        switch (sortOption) {
            case 'completed':
                reminderManager.getAllTasksSortedByDones();
                break;
            case 'importance':
                reminderManager.getAllTasksSortedByImportance();
                break;
            case 'newest':
                reminderManager.getAllSortedByDate();
        }
        printAllTheTable();
    })

    // // console.log('asd',reminderManager.getAllTask());
    // console.log(reminderManager.getAllTasksSortedByDones()); // sort by done to undone
    // console.log(reminderManager.getAllTasksSortedByImportance()); // sort by Importance
    // // console.log(reminderManager.getAllSortedByDate()); // have to check if works

    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

})();