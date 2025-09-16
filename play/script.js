let existingTaskId = null;

document.getElementById('add-task-btn').addEventListener('click', (e) => {
    let taskInput = document.getElementById('task-input').value;
    console.log(taskInput);

    // get in array
    let tasks = JSON.parse(localStorage.getItem('task'))|| [];

    console.log(tasks);

    if (existingTaskId !== null){
        tasks[existingTaskId] = taskInput;
        existingTaskId = null;
    }else {
        tasks.push(taskInput);
    }
    // set in text
    localStorage.setItem('task', JSON.stringify(tasks));

    renderTask(tasks)
})

function deleteTask(index){
    let tasks = JSON.parse(localStorage.getItem('task'));
    tasks.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(tasks));
    renderTask(tasks)
}

function renderTask(tasks) {
    let tasksList = document.getElementById('task-list');
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const liTag = document.createElement('li');
        const deleteButton = document.createElement('button');
        const updateButton = document.createElement('button');

        deleteButton.textContent = 'Delete Button';
        updateButton.textContent = 'Edit Task';

        liTag.innerText = task;
        liTag.appendChild(deleteButton);
        liTag.appendChild(updateButton);
        tasksList.appendChild(liTag);


        deleteButton.addEventListener('click', (e) => {
            deleteTask(index);
        })

        updateButton.addEventListener('click', (e) => {
            console.log('edit clicked index:', index);
            document.getElementById('task-input').value =  task;
            existingTaskId = index;
        })
    })
}