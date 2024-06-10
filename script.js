// script.js

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = taskText;

    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
