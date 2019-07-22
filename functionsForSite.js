

   function authorization() {
    var autlogin=document.getElementById('login').value;
    var autpass=document.getElementById('password').value;
    localStorage.setItem(login,autlogin);
    console.log(autlogin)
    localStorage.setItem(pass,autpass);
    console.log(localStorage.removeItem('login'))
    alert('Вы зарегистрированы');
    window.open('site.html');
   } 

     function foolproof() {
      
        var Element=document.getElementById('formAut');
        var elements=Element.getElementsByTagName('input');
        for (var i=0;i<elements.length;i++) {
           if( elements[i].value==='') {
              alert('Проверьте и заполните форму верно!');
              return;
           }
        }

       var pass=document.getElementById('password').value;
       var checkPass=document.getElementById('password_check').value;
       console.log(document.getElementById('password'))
       if (pass===checkPass) {
         authorization();
         } 
       else {
         alert('Пароли не совпадают');    
   }
  
}
    function registration(one,two) {
     document.getElementById(one).style.display='none';
     document.getElementById(two).style.display='block';
   } 
