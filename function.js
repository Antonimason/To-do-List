"use strict"

let count;

function verify() {
    if(localStorage.getItem('tasks') === null) {
        console.log('no hay data');
    } else {
        show();
    }
}

verify();

document.getElementById('buttom').addEventListener('click', ()=> {
    add();
});

function add() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    title.subString;
    description.subString;
    
    let task = {
        title, 
        description
        };
    
    if(localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log(task[0]);;
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    show();
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}

function show() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const tasksView = document.getElementById('list');
    tasksView.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += 
        `
                <div class="row border-bottom cuadro">
                    <div class="col-4 text-center">
                        <b><p class="text-center my-3">${title}</p></b>
                    </div>
                    <div class="col-6 text-center">
                        <p class="text-center my-3">${description}</p>
                    </div>
                    <div class="col-2 text-center">
                        <i onclick="Delete('${title}')" class="fa-sharp fa-solid fa-trash display-6 my-3 text-danger vergacion"></i>
                    </div>
                </div>
        `
    }
}

function Delete(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks',JSON.stringify(tasks));
    show();
}