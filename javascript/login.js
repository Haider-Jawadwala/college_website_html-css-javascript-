var attempt = 3; 


function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "vidyalankar" && password == "vidyalankar123"){
		alert ("Login successfully");
		window.location = "index.html"; //redirecting to other page
	}
	else{
		attempt --;//Decrementing by one
		alert("Incorrect Password !! You have left "+attempt+" attempt;");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}