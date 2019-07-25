function authorization() {
    var autlogin = document.getElementById('login').value;
    var autpass = document.getElementById('password').value;
    localStorage.setItem('login', autlogin);
    var nameOfUser = document.getElementById('firstname').value;
    localStorage.setItem('name', nameOfUser);
    var lastNameOfUser = document.getElementById('lastname').value;
    localStorage.setItem('lastName', lastNameOfUser);
    console.log(autlogin)
    localStorage.setItem('pass', autpass);
    console.log(localStorage.getItem('firstname'))
    alert('Вы зарегистрированы');
    window.open('firstPage_Vue.html');
}

function foolproof() {
    var Element = document.getElementById('formAut');
    var elements = Element.getElementsByTagName('input');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value === '') {
            alert('Проверьте и заполните форму верно!');
            return;
        }
    }
    var pass = document.getElementById('password').value;
    var checkPass = document.getElementById('password_check').value;
    console.log(document.getElementById('password'))
    if (pass === checkPass) {
        authorization();
    } else {
        alert('Пароли не совпадают');
    }

}


function registration(one, two) {
    document.getElementById(one).style.display = 'none';
    document.getElementById(two).style.display = 'block';
}

function blockForm() {
    var elements = document.getElementById('formInfo')
    var element = elements.getElementsByTagName('input');
    for (var i = 0; i < element.length; i++) {
        element[i].disabled = 1;
        console.log(element[i]);
    }
}


function clickRadio(tagName) {
    var divElements = document.getElementById('radioForm');
    var radioElements = divElements.getElementsByTagName('input');


    for (var i = 0; i < radioElements.length; i++) {
        if (radioElements[i].value === '1') {
            document.getElementById('radioForm').style.display = 'none';
            document.getElementById(tagName).style.display = 'block';
        } else {
            if (radioElements[i].value === '2') {
                document.getElementById('radioForm').style.display = 'none';
                document.getElementById(tagName).style.display = 'block';
            } else {
                if (radioElements[i].value === '3') {
                    document.getElementById('radioForm').style.display = 'none';
                    document.getElementById(tagname).style.display = 'block';
                }
            }
        }
    }

}


function returnToRadio(tagName) {
    document.getElementById(tagName).style.display = 'none';
    document.getElementById('radioForm').style.display = 'block';
}

function deauthorize() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('name');
    localStorage.removeItem('lastName');
    alert('Вы вышли из своего аккаунта');
    window.open('new_file_vueHTML.html');
}


function comeIn() {
    alert('проверка1')
    var log = document.getElementById('myLog');
    var pass = document.getElementById('myPass');
    var localLog = localStorage.getItem('login');
    var loсalPass = localStorage.getItem('pass');
    alert('проверка')
    if (log.value === localLog && pass.value === loсalPass ) {
        alert('успешно введен пароль и логин')
        window.open('firstPage_Vue.html')

    }
    else {
        alert('Неверный логин или пароль');
    }
}

function avatar() {
    var sprites = localStorage.getItem('login')
    var othersrc = 'https://api.adorable.io/avatars/209/'+sprites+'.png '
   /* var hrefForImage = 'https://avatars.dicebear.com/v2/:male/:'+sprites+'.svg' */
    alert(othersrc);
    var img = document.getElementById('avatar')
    img.src= othersrc; 
}

 function checkRegistration() {
    var localLog = localStorage.getItem('login');
    var localPass = localStorage.getItem('pass');
    if (localLog != null && localPass != null) {
      alert('Пользователь на этом компьютере уже зарегистрирован, войдите в свой аккаунт')
      var button = document.getElementById('formAut')
      button.disabled = true;
      var elements = document.getElementById('formAut')
      var element = elements.getElementsByTagName('input');
      for (var i = 0; i < element.length; i++) {
        element[i].disabled = true;
        console.log(element[i]);
      }
    }
  }

