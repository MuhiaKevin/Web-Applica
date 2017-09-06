
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
	// create variables to save input

	var issueDesc = document.getElementById('issueDescInput').value;
	var issueSeverity = document.getElementById('issueSeverityInput').value;
	var issueAssignedTo = document.getElementById('issueAssignedTOInput').value;

	var issueId = chance.guid();

	var issueStatus  = 'Open';

	// Create the Object that will store the information which will be stored inside the web browser Storage

	var issue= {
		id : issueId,
		description : issueDesc,
		severity : issueSeverity,
		assignedTo : issueAssignedTo,
		status : issueStatus 
	};

	// Insert the Object issue which is the data inside the Web browser Storage

	// first check if there is something inside the localStorage

	if(localStorage.getItem('issues') ==null){
		
		// initalize an empty array

		var issues = [];

		//push the Object issue that contains the data inside the issues array

		issues.push(issue);

		// save the issues array inside the localStorage and make it a string in JSON format

		localStorage.setItem('issues',JSON.stringify(issues));
	}
	
	// if there is something inside the local storage then retrieve everything that is in the localStorage

	else{
		 
		 // get the issues array inside the local storage and format it in JSON and store the values inside the issue array

		var issues = JSON.parse(localStorage.getItem('issues'));

		// push everything inside the issue Object into the issues Array

		issues.push(issue);
		localStorage.setItem('issues',JSON.stringify(issues));	
	}

// set  everything in the form and reset evrything so that it does not have any value

document.getElementById('issueInputForm').reset();

// Call fetchIssue function since the data has been inserted in the localStorage  therefore the function will be called to fetch the data and display it

fetchIssues();


// This will prevent the form from submitting

e.preventDefault();
}


function setStatusClosed(id){
	var issues = JSON.parse(localStorage.getItem('issues'))
	for (var i = 0; i < issues.length; i++) {
		if (issues[i].id == id) {
			issues[i].status = 'Closed'
		} 
	}

	localStorage.setItem('issues',JSON.stringify(issues))
	fetchIssues();
}


function deleteIssue(id) {
	var issues = []; 
	issues = JSON.parse(localStorage.getItem('issues'));
	for (var i = 0; i < issues.length; i++) {
		if (issues[i].id == id) {
			issues[i].splice(i,1)
		} 
	}

	localStorage.setItem('issues',JSON.stringify(issues))
	fetchIssues();
}


// This function is going to fetch the data that will be stored inside the local storage of the web browser 

function  fetchIssues() {
	//this variable will store what will be in the web browser storage 
	
	var issues = JSON.parse(localStorage.getItem('issues'));
	var issuesListe = document.getElementById('issuesList')

	issuesListe.innerHTML="";

	//This is going to loop through all the values stored in the issues object array

	for (var i = 0; i < issues.length; i++) {
		// retrieve the properties  theat will be inside the issues object

		var id = issues[i].id

		var desc = issues[i].description;

		var severity = issues[i].severity;

		var assignedTo = issues[i].assignedTo

		var status = issues[i].status;


		// Generate the HTML for display

		issuesListe.innerHTML += '<div class="well">'+
							     '<h6>Issue Issue ID: ' + id + '</h6>'+
							     '<p><span class="label label-info">' + status + '</span></p>' +
							     '<h3>'+ desc + '</h3>' +
							     '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>'+
							     '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
							     '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' + 
							     '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
							     '</div>'

	}



}

