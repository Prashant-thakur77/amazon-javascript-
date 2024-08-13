let score= JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0


};
updateScoreElement();
document.querySelector('.js-resetbutton').addEventListener('click',()=>{
  showwarning();


})


function resetscore(){
  score.wins=0;
  score.losses=0;
  score.ties=0;

  
  


localStorage.removeItem('score');
updateScoreElement();

}






/*if(!score) {
  score={
    wins: 0,
    losses: 0,
    ties: 0


  };
  
}*/

let isplaying=true;
let intervalid;

document.querySelector('.js-autoplay').addEventListener('click',()=>{
  autoPlay();

})





function autoPlay(){

  if(isplaying){
     intervalid=setInterval(()=>{
      const playermove=pickComputerMove();
      playGame(playermove);
      
  
      
    },1000)
    isplaying=false;
    document.querySelector('.js-autoplay').innerHTML='Stop Playing';
      


  }
  else{
    clearInterval(intervalid);
    isplaying=true;
    document.querySelector('.js-autoplay').innerHTML='Auto Play';
      

  }
  

}
const paperElement= document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('Rock');
})
const rockElement= document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('Paper');
})
const scissorElement= document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('Scissors');
})

document.body.addEventListener('keydown',(event)=>{
  if(event .key==='r'){
    playGame('Rock')

  }
  else if(event.key==='p'){
    playGame('Paper')
  }
  else if(event.key==='s'){
    playGame('Scissors')
  }
  else if(event.key==='a'){
    autoPlay();
  }
  else if(event.key==='Backspace'){

    showwarning();
  }
  

 
   
  



})
function showwarning(){
    
  document.querySelector('.js-warning').innerHTML = `
  Are you sure you want to reset the score
  <button class="js-resetbutton-yes">
  YES
  </button>
  <button class="js-resetbutton-no">
  NO
  </button>
  `;
  document.querySelector('.js-resetbutton-yes').addEventListener('click',()=>{
    resetscore();
    hidebutton();
    
      
    
  })
  document.querySelector('.js-resetbutton-no').addEventListener('click',()=>{
    
    hidebutton()
  })
}
let timeoutid;
function hidebutton(){
  
  clearTimeout(timeoutid);
   timeoutid =setTimeout(function(){
    document.querySelector('.js-warning').innerHTML='';
    

  },1000)
}


function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = ' ';

  if(playerMove === 'Scissors') {
      if(computerMove ==='Rock') {
        result = 'Lose';
      }
      else if(computerMove === 'Paper') {
        result = 'Win';
    }

      else if(computerMove === 'Scissors') {
        result = 'Tie';
      }
      

  }
  
  


 else if(playerMove==='Paper'){
    if(computerMove ==='Rock') result = 'Win';
    else if(computerMove === 'Paper') result = 'Tie';
    else if(computerMove === 'Scissors') result = 'Lose';
    
    

  }
  else if(playerMove==='Rock'){
    if(computerMove ==='Rock') result = 'Tie';
    else if(computerMove === 'Paper') result = 'Lose';
    else if(computerMove === 'Scissors') result = 'Win';
    
  }
  if(result==='Win') score.wins+=1;
  else if(result=== 'Lose') score.losses +=1;
  else if(result=== 'Tie') score.ties +=1;


  localStorage.setItem('score',JSON.stringify(score));


 updateScoreElement();
 

 document.querySelector('.js-result')
  .innerHTML= `You ${result}.`;

 document.querySelector('.js-moves')
  .innerHTML= ` You:
  <img src="moves-game/${playerMove}-emoji.png" class="move-icon">
  <img src="moves-game/${computerMove}-emoji.png" class="move-icon">
  :computer`  ;



 
 




}
function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML= `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}.`

}






function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = ' ';

  if(randomNumber>=0 && randomNumber<1/3) computerMove = 'Rock';
  else if(randomNumber>=1/3 && randomNumber<2/3) computerMove = 'Paper';
  else if(randomNumber>=2/3 && randomNumber<1) computerMove = 'Scissors' ;
  return computerMove;

}
