var inputOneIsOn = false; 
var inputTwoIsOn = false;


function toggleImage() {
   var img1 = "button-off-xxl.png";
   var img2 = "button-on-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage');
   
    if(inputOneIsOn){
        imgElement.src = img1;
    }else{
        imgElement.src = img2;
    }
   
}

  
function toggleImage2() {
   var img1 = "button-off-xxl.png";
   var img2 = "button-on-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage2');


   if(inputTwoIsOn){
        imgElement.src = img1;
    }else{
        imgElement.src = img2;
    }
   
}

    function toggleInputOne() { 
            inputOneIsOn = !inputOneIsOn; 
            
        } 

    function toggleInputTwo() { 
            inputTwoIsOn = !inputTwoIsOn; 
              
           
        } 



function and(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('andGate').src='and2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('andGate').src='andoffon.PNG';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='andonoff.PNG';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='and2off.PNG';
	}
