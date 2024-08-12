const todoList=[];
function addToDo(){
  
  const nameelement=document.querySelector('.js-input-box');
  const name=nameelement.value;
  todoList.push(name);
  
  console.log(todoList);
  nameelement.value='';



}
