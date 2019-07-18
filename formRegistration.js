function Autorization() {
    var autlogin='login';
    var autpass='password';
  localstorage['log']=autlogin;
  localstorage['pass']=autpass;

}

function foolproof() {
    var pass='password';
    var checkPass='password_check';
    if (pass===checkPass) {
        Autorization();
    } 
    else {
      alert('Пароли не совпадают')    
    }
}
