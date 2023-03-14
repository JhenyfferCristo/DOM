let taskInput = document.getElementById("userInput");
let taskList = document.getElementById("list");

function addTask(){

if(taskInput.value != ""){
let newListItem =  document.createElement("li");
newListItem.innerHTML = taskInput.value;
taskList.appendChild(newListItem);}

}

function submitTask(e){
    if(e.code=="Enter"){
       addTask(); 
    }
}