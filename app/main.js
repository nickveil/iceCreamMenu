//Globals
 
var buttons = document.getElementsByClassName('button');
var flavorPanel = document.getElementById('flavorPanel');





// Wait for page to load before making button work
document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
	    //watch display for button push
	    displayPanel()

  }
};

function displayPanel() {
	//console.log('Entering displayPanel');
	//Listen for button to be clicked then display pannel
	for (var i = 0; i < buttons.length; i++ ){
		buttons[i].addEventListener('click', checkPanel);

	}

 }

 function checkPanel() {
	//console.log('Entering checkPanel function')

 	if (this.classList.contains('flavor')){
 		//display flavor panel when flavor button is pushed

 		flavorPanel.style.display = 'block';
 		console.log('Flavor');
	 	console.log(this);


 	}else if (this.classList.contains('seasonal')){
 		//display seasonal panel when seasonal button is pushed
 		
 		seasonalPanel.style.display = 'block';
 		console.log('Seasonal');
	 	console.log(this);

 	}else if (this.classList.contains('toppings')) {
 		//display toppings panel when toppings button is pushed

 		toppingsPanel.style.display = 'block';
 		console.log('Topping');
	 	console.log(this);

 	}else if (this.classList.contains('serving')) {
 		//display serving panel when serving button is pushed

 		servingPanel.style.display = 'block';
 		console.log('Serving');
	 	console.log(this);

 	}

 	console.log(this);
 }


