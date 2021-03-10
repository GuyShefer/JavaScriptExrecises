const myModule = require('./script');

const Task = myModule.Task;
const ReminderManager = myModule.ReminderManager;

console.log(Task, ReminderManager);
const reminderManager = new ReminderManager();


test('add new task to the reminder tasks', () => {
    let task = new Task('some description');
    expect(reminderManager.addTask(task)).toBe(1);
})

test('add new task with out of description text', () => {
    let task = new Task('');
    expect(() => reminderManager.addTask(task)).toThrow('Task`s description is empty');
})