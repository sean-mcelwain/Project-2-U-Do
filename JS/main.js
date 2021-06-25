function startfunction(){
	//function which runs on body onload

	document.getElementById('signupdiv').style.display = "none";
}

function showlogin(){
	
	//this function shows the login div and hides the sign up div
	document.getElementById('signupdiv').style.display = "none";
	document.getElementById('logindiv').style.display = "block";
	
}

function showsignup(){
	document.getElementById('signupdiv').style.display = "block"; //display the sign up div
	document.getElementById('logindiv').style.display = "none"; //hide login div
	
}