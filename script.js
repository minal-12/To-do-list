document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("btn");
    const taskList = document.getElementById("task-list");
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText != " ") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${taskText}<button class="delete">Delete</button>`;
            listItem.querySelector(".delete").addEventListener("click", function () {
                listItem.remove();
            });
            
            taskList.appendChild(listItem);
            taskInput.value="";
        }

    });
    taskInput.addEventListener("keypress" , function(event){
        if(event.key =="Enter"){
            addTaskButton.click();
        }
    });
});