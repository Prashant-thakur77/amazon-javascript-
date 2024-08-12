const todoList=['make food','make room'];

rendertodolist();

function rendertodolist(){
  let todoisHTML ='';
  for(let i=0;i<todoList.length;i++){
    const todo = todoList[i];
    const html=`<p>${todo}</p>`;
    todoisHTML+=html;
  }
  console.log(todoisHTML);
  document.querySelector('.js-to-list')
  .innerHTML = todoisHTML;

}







function addToDo(){
  
  const nameelement=document.querySelector('.js-input-box');
  const name=nameelement.value;
  todoList.push(name);
  console.log(todoList);
 
  
  
  nameelement.value='';
  rendertodolist();



}
