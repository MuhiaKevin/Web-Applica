
// get Time and format it 
function gettingTime(){
	
	var paraTime = document.getElementById('p_time');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var min = currentTime.getMinutes();
	var seconds =  currentTime.getSeconds();

	hour1 = hours - 12;

	if (hours > 12 ) {
		paraTime.innerHTML =  hour1 + ' : ' + min + ' : ' + seconds + ' Pm'

	}

	else{
		paraTime.innerHTML = hour1 + ' : ' + min + ' : ' + seconds + ' Am'

	}

}

// set interval to chage the time after each second
setInterval(gettingTime,1000)