function validateEmailFormat(email)
{
	var reg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

	return reg.test(email);
}
function validateEmail(email)
{
	if(validateEmailFormat(email)
	{
		//check with server email
	}
	else
	{
		return false;
	}
}
function validatePwMatch(pw1,pw2)
{
	return pw1==pw2;
}
function validatePw(user,pw)
{
	//check with server for match with user pw
}
function validateUsername(username)
{
	//check in database for existing username	
}
function validate2FA(TFA)
{
	//check with database 2FA
}
