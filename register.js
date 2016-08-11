function wrapUser()
{
	//get info from page
	var emailU=$(".emailField")[0].value;
	var usernameU=$(".usernameField")[0].value;
	var pwU=$(".pwField")[0].value;
	var pwU2=$(".pw2Field")[0].value;
	var TFAU=$(".2FA")[0].value;
	
	if(!validateEmail(email) 	//Check email existing and format
	{
		console.error("Error, invalid email format");
		return null;
	}
	if(!validatePwMatch(pwU,pwU2)	//Check passwords match
	{
		console.error("Error, passwords do not match");
		return null;
	}

	var user=
	{
		email: emailU,
		username: usernameU,
		pw: pwU,
		TFA: TFAU
	}
	
	//probably want to reach out to database instead
	//via addUser below
	return user;
}
function addUser(user)
{
	//assumes validated
	//reach out to database
}
function doThis()
{
	console.log("test");
}
