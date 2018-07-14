
const txtPassword = $('#txtPassword');
const passwordUsers = $('#users-password');
let txtEmail = $('#txtEmail');
let refUsers;//referencia a la bd del usuario
let passwordValidate;
//....................................................................... EVENTO VALIDACION DE CORREO ELECTRONICO
$('#txtEmail').bind('input', () => {
    validateEmail($('#icon-check'));
});
$('#users-email').bind('input', () => {
    validateEmail($('#icon-validate'));
});
//....................................................................... VALIDACION DE PASSWORD REPETIDO
$('#users-passwordTwo').bind('input', () => {
    passwordTwo = event.target.value;
    passwordOne = passwordUsers.val();
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (passwordTwo === passwordOne) {
        passwordValidate = 'passwordValido';
        $('#icon-validate-password').attr('class', 'icon-checkmark');
    } else {
        passwordValidate = 'passwordInvalido';
        $('#icon-validate-password').attr('class', 'icon-cross');
    }
});
//.........................................................................EVENTOS DISPLAY
$('#btnSignUp').click(() => {
    $('#section-login').hide();
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "componentesHTML/register.html", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $('#contentLoginRegister').append(xmlhttp.responseText);
        }
    }
    xmlhttp.send();
});
$('#back-login').click(() => {
    $('#section-register-user').hide();
    $('#contentLoginRegister').show();
});

//.............................................................................CERRAR SESION
$('#btnLogOut').click(() => {
    firebase.auth().signOut();
});

//.......................................................................VALIDACION DE CORREO ELECTRONICO
const validateEmail = (idSpan) => {
    campo = event.target;
    val = campo.value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(val)) {
        idSpan.attr('class', 'icon-checkmark');
    } else {
        idSpan.attr('class', 'icon-cross');
    }
}
