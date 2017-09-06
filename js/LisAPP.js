
// it disables the sign up button so that no data is entered


function disablesecondbutton() {
	var loginButton = document.getElementById('loginBtn').disabled = false;

	// var SignUpButton = document.getElementById('signUpBtn').disabled = true;
	var SignUpButton = document.getElementById('signUpBtn');

    var formLogin = document.getElementById('loginForm');
    
    // hide the sign up button after the login btn is clicked

	SignUpButton.style.visibility = 'hidden';
	
	// create inner dynamic html for after the button has been pressed 

	formLogin.innerHTML = '<ul>'+
								'<li>'+
								  '<input type="text" id="user" name="username" placeholder="Username">'+
								'</li>'+
								'<li>'+
								  '<input type="password" id= "pass1" name="pass1" placeholder="Password">'+
								'</li>'+
								'<li>'+
								  '<button type="submit" id="sendlogin" class="btn btn-success" onclick="saveData()" >Submit</button>'	
						  		'</li>'+	
						  '</ul>'
}


function disablefirstbutton() {
		
	window.location = 'file:///home/muhia/Documents/Projects/Submit/Web%20APp/html/ListSignUpLogin.html'

}

// validate the login data

function check_login_values() {
	
	saveData();

	var logData =[];
	logData = JSON.parse(localStorage.getItem('loginArray'));
	var password =logData[0].passwrd;
	var usernm = logData[0].username;

	var user = document.getElementById('user').value;
	var passwordd = document.getElementById('pass1').value;
	
	if (user ==usernm ) {
		alert('Passwords Match')
	} else {
		alert('Passwords DONT MATCH!!!')
	}
	
}

//This function will save the data that will be entered

function saveData() {
	var user = document.getElementById('user').value;
	var passwordd = document.getElementById('pass1').value;
	
	// create a login array to which the login object will be stored

	var loginArray = []

	// create a login object where that saves the password and username 

	var LoginObject = {
		username : user,
		passwrd : passwordd
	};

	// push the loginObject to the loginArray 

	loginArray.push(LoginObject);
	
	// save the login array inside the localStorage

	localStorage.setItem('loginArray',JSON.stringify(loginArray));

}
