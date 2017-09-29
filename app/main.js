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
	console.log('Entering displayPanel function');
	//Listen for button to be clicked then display pannel
	for (var i = 0; i < buttons.length; i++ ){
		var buttonPushed = buttons[i].addEventListener('click', checkPanel);
		//console.log(buttonPushed);
	}

 }

 function checkPanel() {
 	//var butLabel= this.innerHTML;
 	//console.log(butLabel);
	//console.log('Entering checkPanel function')

 	if (this.innerHTML ==='Flavor Option'){
 		console.log("Entering flavor selection")

 		//display flavor panel when flavor button is pushed

 		flavorPanel.style.display = 'block';
 		console.log('Flavor');
	 	


 	}else if (this.innerHTML ==='Seasonal Option'){
 		//display seasonal panel when seasonal button is pushed
 		
 		seasonalPanel.style.display = 'block';
 		console.log('Seasonal');
	 	//console.log(this);

 	}else if (this.innerHTML ==='Toppings') {
 		//display toppings panel when toppings button is pushed

 		toppingsPanel.style.display = 'block';
 		console.log('Topping');
	 	//console.log(this);

 	}else if (this.innerHTML ==='Serving Option') {
 		//display serving panel when serving button is pushed

 		servingPanel.style.display = 'block';
 		console.log('Serving');
	 	//console.log(this);

 	}

 	//console.log(this);
 }


