(function(){

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  //to find out which button is pressed.
   buttons.forEach(function(button){
    button.addEventListener('click', function(e){ // when the button is clicked, a function runs, which gets the value (data-set) of the button.
      let value = e.target.dataset.num; //assigns it to the variable 'value'.
      screen.value = screen.value + value; //adds the value on to the screen.
    })
  });

  // to evaluate the math logic and add the new value to the screen.
  equal.addEventListener('click', function(e){
    if (screen.value === ''){ 
      screen.value = '';  //if the screen value is empty when the equal button is clicked, it stays empty.
    } else {
      let answer = eval(screen.value); // else, it puts the value in the eval function and assigns the evaluated value to 'answer'.
      screen.value = answer;  // screen value is replaced with the 'answer'.
    }
  })

  // to clear/delete the value in the screen. adds an event listener and runs a funtion if an event is clicked. 
  clear.addEventListener('click', function(e){
    screen.value = ''; // empties the screen value.
  })

})();