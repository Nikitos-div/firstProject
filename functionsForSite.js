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
        element[i].value = localStorage.removeItem('pass');
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