
const genpass=document.querySelector(".btn1");
// const copypass=document.querySelector(".btn2");
const password=document.querySelector("#password");
function genPassword(){
    var pass=" "
    chars="0123456789abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@$&?"
    for (let index = 0; index <12; index++) {
        var randomNumber = Math.floor(Math.random()*chars.length);
        pass+=chars.substring(randomNumber,randomNumber+1);
    }
    password.value=pass
    
}
function CopyPassword(){
    password.select()
    password.setSelectionRange(0,999)
    document.execCommand("copy")

}
