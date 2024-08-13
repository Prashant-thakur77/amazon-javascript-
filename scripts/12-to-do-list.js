 const todoList=[{
  name:'make dinner',
  duedate:'2024-12-22'
}];

rendertodolist();

function rendertodolist(){
  let todoisHTML ='';
  
  todoList.forEach((todoObject,index)=>{
    
    const {name,duedate}=todoObject;
   
    const html=`
    
    <div> ${name}</div>
    <div> ${duedate}</div>

    
    <button onclick="
    todoList.splice(${index},1);
    rendertodolist();

    " class="delete-button">Delete</button>`
    ;
    todoisHTML+=html;
  })

  document.querySelector('.js-to-list')
  .innerHTML = todoisHTML;

  }
 







function addToDo(){
  
  const nameelement=document.querySelector('.js-input-box');
  const name=nameelement.value;
  const duedateelement=document.querySelector('.js-date-selector')
  const duedate=duedateelement.value;

  todoList.push({
    name,
    duedate
  });
 
 
  
  
  nameelement.value='';
  duedateelement.value='';
  rendertodolist();



}
