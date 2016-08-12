function formToJSON(user, pw) {
    var json = {
        user: user,
        pw: md5(pw)
    };
    console.log(json);
}
function doThis() {
    var user = $(".usernameField")[0].value;
    var pw = $(".pwField")[0].value;
    formToJSON(user, pw);
}
function callLogin() {
    var username = $("#usernameField").val();
    var password = $("#passwordField").val();
    var hashedPassword = md5(password);
    var userIP = '127.0.0.1'; // TODO get the IP using NodeJS

    var jsonObj = {
        username: username,
        password: hashedPassword,
        userIP: userIP
    };

    console.log(JSON.stringify(jsonObj, null, 2));
}