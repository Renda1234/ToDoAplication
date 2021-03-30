
const inhalt = 
`<div id="header">
<h1>ToDo List</h1>
<input type="text" class="Input" placeholder="Enter WhatToDo...">
<span class="addBtn">Send it RFN!</span>
</div>
<ul class="myUL">
`;

document.body.innerHTML=inhalt;

function addNewTask(taskContent, status) {
  this.taskContent=taskContent;
  this.status='true';  
}

const tasks =[]; //globaly declared array

document.querySelector('.addBtn').addEventListener('click',()=>{
  let newTask=new addNewTask(document.querySelector('.Input').value,true);
  tasks[tasks.length]=newTask;
  showActiveTasks();

});




let showActiveTasks = ()=>{
  const taskNode = document.querySelector('.myUL');
  const activeTasksArray = tasks.filter((option)=>option.status==='true');
  taskNode.innerHTML=''; // i know it is not good, but its simple
  activeTasksArray.forEach((option)=>{
    let ToDoItem = document.createElement('li');
    ToDoItem.textContent=option.taskContent;
    taskNode.appendChild(ToDoItem);
  })
}

