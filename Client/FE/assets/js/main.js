var btnExit = document.querySelector('.icon-cancel');
var btnExit1 = document.querySelector('#cancel');
var modal = document.querySelector('.modal');
var modal1 = document.querySelector('.modal1');
var oldedPasswordError = '';
var newPasswordError = '';
var successful = '';
var username = 'admin';
var password = 'admin';
var passworderror = ' ';
var usernameerror = ' ';
btnExit.addEventListener('click', function(event) {
    modal.style.display = 'none';
});
btnExit1.addEventListener('click', function(event) {
    modal1.style.display = 'none';
});
var btnLogin = $('#btn-login');
btnLogin.click(function(event) {
    modal.style.display = 'block';

});

$('#login-sumbit').click(function(event) {
    var usernameinput = $('#username').val();
    var passwordinput = $('#password').val();
    if (usernameinput !== '' && passwordinput !== '') {
        if (usernameinput === username && passwordinput === password) {
            alert('Login successful');
            modal.style.display = 'none';
        } else {
            if (usernameinput !== username) {
                usernameerror = 'Username Invalid';
                $('#iusername').html(usernameerror);
            }
            if (passwordinput !== password) {
                passworderror = 'Password Invalid';
                $('#ipassword').html(passworderror);
            }
        }
    } else {
        if (passwordinput === '') {
            passworderror = 'Password Required';
            $('#ipassword').html(passworderror);
        }
        if (usernameinput === '') {
            usernameerror = 'Username Required';
                $('#iusername').html(usernameerror);
        }
    }
});


$('#buttonforgot').click(function() {
    modal.style.display = 'none';
    modal1.style.display = 'block';
});
$('#back').click(function() {
    modal.style.display = 'block';
    modal1.style.display = 'none';
});

$('#save').click(function() {
    var oldedPassword = $('#olded-password').val();
    var newPassword = $('#new-password').val();
    if (oldedPassword !== '' && newPassword !== '') {
        if (oldedPassword == password) {
            password = newPassword;
            successful = 'Change Password Successfully';
            $('#success').html(successful);
            modal.style.display = 'block';
            modal1.style.display = 'none';
        } else {
            oldedPasswordError = 'Password Invalid';
            $('#iolded-password').html(oldedPasswordError);
        }
        console.log(password);
    } else {
        if (oldedPassword === '') {
            oldedPasswordError = 'Password Required';
            $('#iolded-password').html(oldedPasswordError);
        }
        if (newPassword === '') {
            newPasswordError = 'Password Required';
            $('#inew-password').html(newPasswordError);
        }
    }
})

var oj = {
            "content": [
                {
                    "id": 9,
                    "name": "Phan Quoc D",
                    "gender": null,
                    "age": 21,
                    "address": "HT"
                },
                {
                    "id": 2,
                    "name": "Tran Quoc C",
                    "gender": null,
                    "age": 22,
                    "address": "HN"
                }
            ],
            "pageable": {
                "sort": {
                    "sorted": false,
                    "unsorted": true,
                    "empty": true
                },
                "offset": 0,
                "pageNumber": 0,
                "pageSize": 2,
                "paged": true,
                "unpaged": false
            },
            "last": false,
            "totalElements": 5,
            "totalPages": 3,
            "size": 2,
            "number": 0,
            "sort": {
                "sorted": false,
                "unsorted": true,
                "empty": true
            },
            "numberOfElements": 2,
            "first": true,
            "empty": false
    }

    var content = oj.content;
    content.forEach(function(item) {
        console.log(item.id);
    })
