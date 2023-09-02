const input = document.getElementById("add-task")
const button = document.querySelector("button")
const taskList = document.getElementById("task-list")

function addNewTask() {
    if (input.value) {
        // creating a new task
        let newTask = document.createElement("div");
        newTask.classList.add("task")
        // text added by the user
        let text = document.createElement("p");
        text.innerText = input.value;
        newTask.appendChild(text)
    
        // adding and creating icons container
        let icons = document.createElement("div");
        icons.classList.add("icons")
        newTask.appendChild(icons)

        // Icons
        let complete = document.createElement("i");
        complete.classList.add("bi", "bi-check-circle-fill", "complete-icon")
        complete.addEventListener("click",completeTask);
    

        let Delete = document.createElement("i");
        Delete.classList.add("bi","bi-trash3-fill", "delete-icon")
        Delete.addEventListener("click",deleteTask)

        icons.append(complete, Delete);

        // adding  the  new task to the list
        taskList.appendChild(newTask);
    }else{
        alert("Please, add a new task to start")
    }
}

// marking the task as complete
function completeTask(e){
    let task = e.target.parentNode.parentNode;
    task.classList.toggle("complete-task")
}

// deleting the complete task
function deleteTask(e){
    let task = e.target.parentNode.parentNode;
    task.remove();
}

button.addEventListener("click", addNewTask);

input.addEventListener("keydown", (e)=> {
    if (e.key === "Enter"){
        addNewTask();
    }
});