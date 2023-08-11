//Custom Function
function calculateTip(){
    //store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    //declare variables for serviceQuality 
    //var numPeople

    //quick validation - check not $0! use some logic to check if there is a bill amount and service quality, otherwise put up an alert
    if( || ) {
        window.alert(" Put alert here  ");
        return; // This will prevent the functions from continuing
    }

    //Check to see if this input is empty or less than equal to 1
    if( || ) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }
    
    //Do some maths! what variables do we multiply and divide??
    var total = ( * ) / ;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    

    //Display the tip!
    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function(){calculateTip();};




