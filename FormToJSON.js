$(document).ready(function()
{
	$(".submit").click(function()
	{
		doThis();
	});
});

function formToJSON(user, pw)
{
	var json=
	{user:user,pw:md5(pw)};
	console.log(json);
}
function doThis()
{
	var user=$(".usernameField")[0].value;
	var pw=$(".pwField")[0].value;
	formToJSON(user,pw);
}
