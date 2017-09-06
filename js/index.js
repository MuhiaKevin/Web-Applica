/*
							==========
							   NOTES
							===========
	 					   

	 					    ===========
						      EXAMPLE 1
						    ===========
	
	- Every form has a form object

	- In this example the form object is passed as an argurement from the html when 
	  the submit button is clicked
	
	- The form object also acts as an array value that stores all the name values of 
		all the input fields in the form element int the html file

	-to access the value you call the form object as an array but the name value in the input field will
		be used then followed by the value attribute of javascript to access whateva that will be inside
		the input field

	

						 
*/

function showIt(form) {
	//write the value of the input enterd in the name attribute called "msg" 
	alert("Niaje " + form["namme"].value)

return false;
}


/*
						===========
						 EXAMPLE 2
						===========


	1.when the input tag is blured(onBlur) due to nothing being enterd it calls the function ( check() ) and passes the "this" oject
	  which is the object of that form field in which in this case is the name input tag   

	2. "this" keyword that is passed by the html input tag is used to refer to the object itself of the 
	   input tag and also the other input tags of the form field

	2. The inputField argurement passed to the function 
	3. the inputfields values length is checked to see if its equal to 0
	4. if so then the alert code is executed
	4. null respresents the absecene of any object value



*/
 

function check(inputField,helpText){
	
	// see if the input value contains any value

	if (inputField.value.length == 0) {
		
		// if the data is invalid so set the help messaage 

		if (helpText != null) {

			helpText.innerHTML = "please enter a value"
		}

		
	}

	else{

		//the data is ok so clear the help message

		if (helpText != null) {
			helpText.innerHTML = ""
		}		
	}


return false;
}


function validateLength(minLength,maxLength,inputField,helpText){
	if (inputField.value.length < minLength || inputField.value.length > maxLength) {
		if (helpText != null) {

			helpText.innerHTML = "please enter a value between " + minLength  + "and " + maxLength;

		} 

	return false;
	} 
	else {
		
		if (helpText != null) {
			helpText.innerHTML = " ";
		}
	}
return true;
}

function validateZIPcode(inputField,helpText) {
	
	//first see if the input value is anything other than 5
	if (inputField.value.length !=5) {
		
		// if the data is invalid so set the help messaage 

		if (helpText != null) {

			helpText.innerHTML = "please enter a value"
		
			return false; // return false since the length of Zip code is not exactly 5
		}
		
		// see if the input is non a number 

		else if(isNaN(inputField)){ //the isNaN() function is used to check if a value is not a number
			
			if (helpText != null) {
				helpText.innerHTML = "please enter a number";
				
				return false; // return false since the zip code is not a number
		}

		
		}
	}
		else {
		
			if (helpText != null) {
			helpText.innerHTML = " ";
		}
	return true; // return true to indicate that the zip code validated ok
	}
		
}