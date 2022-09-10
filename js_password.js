let password = document.getElementById('password');
function genPassword() {
    var chars ="1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:<>?|ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLenght = 12 
    var password = ""
    for (var i = 0; i < passwordLenght; i++) {
        var randomNumber = Math.floor(Math.random()*chars.length)
        password =+ chars.substring(randomNumber,randomNumber+1)
    }
    document.getElementById('password').value = password
}

function copyPassword() {
    var copyPassword = document.getElementById('password');
    copytext.select();
    copytext.setselectionRange(0,999);
    document.execCommand('copy');
}

