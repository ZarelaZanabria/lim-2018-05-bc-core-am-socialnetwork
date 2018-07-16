const passwordUsers = $('#users-password');
const btnLoginFacebook = document.getElementById('btnLoginFacebook');
const btnLoginGoogle = document.getElementById('btnLoginGoogle');
let buttonR = document.getElementById('register');

//....................................................................... EVENTO VALIDACION DE CORREO ELECTRONICO
$('#txtEmail').bind('input', () => {
    validateEmail($('#icon-check'));
});
$('#users-email').bind('input', () => {
    validateEmail($('#icon-validate'));
});
//..................................................................FUNCION VALIDACION DE CORREO ELECTRONICO
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

//....................................................................... VALIDACION DE PASSWORD REPETIDO
$('#users-passwordTwo').bind('input', () => {
    passwordTwo = event.target.value;
    passwordOne = $('#users-password').val();
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
    $('#section-register-user').show();
    $('#section-login').hide();

});

$('#back-login').click(() => {
    $('#section-register-user').hide();
    $('#section-login').show();

});

//...................................................................EVENTO INICIAR SESION
$('#btnLogin').click((event) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword($('#txtEmail').val(), $('#txtPassword').val());// devuelve una promesa que permita identificar al usuario o para detectar cualquien error y registrarlos en firebase
    promise.catch(e => {
        console.log(e.message);
        const errorEmail = e.message;
        if (errorEmail === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
            return document.getElementById('messageValide').innerHTML = 'El usuario no existe';
        }
        if (errorEmail === 'The password is invalid or the user does not have a password.') {
            return document.getElementById('messageValide').innerHTML = 'Password Incorrecto';
        }
        if (errorEmail === 'The email address is badly formatted.') {
            return document.getElementById('messageValide').innerHTML = 'Ingrese el correo correcto';
        }
    });

});

// add a realtime listener estado de autentificacion
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {// si existe el usuario lo insertamos a firebase console
        userLogin = firebaseUser.displayName;
        let componente = componenteMuro(userLogin);
        document.getElementById('componenteProfile').innerHTML = componente;// agrego los componentes a html
        btnLogOut.style.display = 'block'; // aparece mi boton salir
        document.getElementById('headerProfile').style.display = 'block';
        document.getElementById('wapper-content').style.display = 'none';// oculto mi login
        console.log(firebaseUser);
        // document.getElementById('messageValide').innerHTML = '';//  limpio el elemento que notofica si es email y passwor correcto


    } else {// si no mostramos un mensaje de no regstrado 
        console.log('No registrado');
        btnLogOut.style.display = 'none';
    }
});

$('#btnLogOut').click(() => {
    $('#wapper-content').show();
    $('#headerProfile').show();
    document.getElementById('componenteProfile').innerHTML = '';

});
//...............................................................................AUTENTIFICACION CON GOOGLE
$('#btnLoginGoogle').click(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    // para una VENTANA EMERGENTE
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {// Autentica en Firebase usando un flujo de autenticación OAuth basado en ventanas emergentes.
            guardarData(result.user);
        }).catch(error => {
            console.log(error.code, error.message, error.email, error.credential);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Es el mismo usuario');
            }
        });
});

// .................................................................... ........AUTENTIFICACION CON FACEBOOK
$('#btnLoginFacebook').click(() => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');//https://developers.facebook.com/docs/facebook-login/permissions/?translation
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            guardarData(result.user);
        }).catch(error => {
            console.log(error.code, error.message, error.email, error.credential);
        });
});

//........................................................................ REGISTRO A LA BASE DE DATOS
const guardarDataCorreo = (user, name, password, photoURL) => {
    firebase.database().ref('Usuarios/' + user.uid).set({
        usersEmail: user.email,
        usersName: name,
        usersPassword: password,
        photoURL: photoURL,
    });
}
const guardarData = (user) => {
    var usuario = {
        usersEmail: user.email,
        usersName: user.displayName,
        photoURL: user.photoURL,

    }
    firebase.database().ref('Usuarios/' + user.uid).set(usuario);
}