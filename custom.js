
"use strict"

const password=document.querySelector("#password");
const passwordlength=12;

// Password Generator Function
function genPassword(){
    var pass=" "
    chars="0123456789abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@$&";
    
    for (let index = 0; index <passwordlength; index++) {
        var randomNumber = Math.floor(Math.random()*chars.length);
        pass+=chars.substring(randomNumber,randomNumber+1);
    }
    password.value=pass;
}

// Password Copy Function
function CopyPassword(){
    password.select();
    password.setSelectionRange(0,999);
    document.execCommand("copy");

}
