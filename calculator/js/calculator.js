let calculation = localStorage.getItem('calculation')||'';
      displaycalculation();
      function updateCalculation(value){
        calculation+=value;
        
        

        displaycalculation();
        localStorage.setItem('calculation',calculation);
        

      }
      function displaycalculation(){
        document.querySelector('.js-calculation')
        .innerHTML=calculation;
      }
