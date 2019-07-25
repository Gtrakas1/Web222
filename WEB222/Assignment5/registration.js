function Validate(){
    return FilterPwdCheck() && Usernamecheck();
}

function FilterPwdCheck() {
    var psw=document.querySelector("#psw").value.trim();
    var alphString="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var digit="0123456789";
    var passAlpha=true;
    var passDig=true;
    for(var i=0;i<psw.length;i++)
    {
        if(alphString.indexOf(psw.substr(i,1))>=0 ){passAlpha=true; }

    }
    if(!passAlpha){
        alert("did i actually get it?");
        psw.focus();
        return false;
    }
    else{return true;}

}
