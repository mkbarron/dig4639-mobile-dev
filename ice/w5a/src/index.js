<<<<<<< HEAD
import Task from "./components/Task.js"
=======
import Task from "./components/Task/index.js"
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
}

function onClick() {
    console.log("clicked!");
<<<<<<< HEAD
    if (input.value != ""){
        var newTask = new Task({content:input.value,done:false});

        element.appendChild(newTask.render());
        }
=======
    var newTask = new Task({content:input.value,done:false});
    element.appendChild(newTask.render());
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
}

window.addEventListener("DOMContentLoaded", runOnLoad);