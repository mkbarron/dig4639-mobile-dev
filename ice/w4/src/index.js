import Component from "./Component.js";
function runOnLoad()
{
    
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    container.appendChild(element2);
    console.log("Hello World truly");
    let firstTask = new firstTask(
        {
            done:false,
            content:"This is a task"}
    )
    let container = document.getElementById("container")
    let task = document.createElement("div");
    container.appendChild(task);
    task.innerHTML = firstTask.render()
    //element2.innerHTML = comp.render();

window.addEventListener("DOMContentLoaded", runOnLoad);