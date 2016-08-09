$(document).ready(function()
{
	$(".submit").click(function()
	{
		addUser(wrapUser());
		validateEmail();
	});
});
function wrapUser()
{
	var emailU=$(".emailField")[0].value;
	var usernameU=$(".usernameField")[0].value;
	var pwU=$(".pwField")[0].value;
	var pwU2=$(".pw2Field")[0].value;
	var TFAU=$(".2FA")[0].value;
	
	if(pwU!=pwU2)
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
	return user;
}
function addUser(user)
{
	console.log(user);
}
function validateEmail(email)
{
	var reg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

	console.log(reg);
}
