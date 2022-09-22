

let password = document.getElementById('password');
function genPassword() {
    const chars ="1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLenght = 12 
    let password = ""
    for (let i = 0; i <= passwordLenght; i++) {
        let randomNumber = Math.floor(Math.random()* chars.length)
        password += chars.substring(randomNumber,randomNumber+1)
    }
    document.getElementById('password').value = password
}           

function copyPassword() {
    let copytext = document.getElementById('password');
    copytext.select();
    copytext.setselectionRange(0,999);
    document.createRange('copy')
}



