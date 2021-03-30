function elementAdd(){
let ul=document.createElement('p');
  document.querySelector('#header').appendChild(ul);
}

const inhalt = 
`<div id="header">
<h1>ToDo List</h1>
<input type="text" class="Input" placeholder="Enter WhatToDo...">
<span class="addBtn">Send it!</span>
</div>
<ul id="myUL">
`;


document.body.innerHTML=inhalt;



function addTask(name, completed) {
  let p = document.createElement('p');
  p.textContent = name;
  document.querySelector('#myUL').appendChild(p);

  
}

function add(taskContent, status) {
  this.taskContent=taskContent;
  this.status=status;  
}

let tasks =[];
let newTask=new add('testing',true);
tasks[tasks.length]=newTask;




document.querySelector('.addBtn').addEventListener('click',()=>{
 // console.log('hodnota p',document.querySelector('.Input').value);
  let newTask=new add(document.querySelector('.Input').value,true);
tasks[tasks.length]=newTask;

});

console.log(tasks);


 //addTask('dodelani neceho', false);
 