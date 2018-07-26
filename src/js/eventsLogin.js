eventsLogin = () => {
    const txtPassword = $('#txtPassword');
    const passwordUsers = $('#users-password');
    let txtEmail = $('#txtEmail');
    let refUsers;//referencia a la bd del usuario
    let passwordValidate;
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
    const validateFormateEmail = (data) => {
        console.log(data.indexOf('@'),typeof (data.substr(0, 1)),data.length - data.lastIndexOf("."));
        if (data.indexOf('@') >= 5) {
            if (typeof (data.substr(0, 1)) == 'string') {
                if (data.length - data.lastIndexOf(".") <= 5) {
                    return true;
                } else { return 'dominio inexistente' }
            } else { return 'Formato correo invalido ' }
        } else { return 'email diminuto o invalido' }
    }
    const mesaggeFirebase = (message) => {
        switch (message) {
            case 'Password should be at least 6 characters':
                return 'Ingrese contraseña con min 6 caracteres';
                break;
            case 'The email address is badly formatted.':
                return 'Ingrese un correo valido';
                break;
            case 'The email address is already in use by another account.':
                return 'Este correo ya esta registrado';
                break;
            case 'The password is invalid or the user does not have a password.':
                return 'Password Incorrecto';
                break;
            case 'There is no user record corresponding to this identifier. The user may have been deleted.':
                return 'El usuario no existe';
                break;
        }
    }
    const viewMessage = (message) => {
        document.getElementById('mensaggeRegisterValide').innerHTML = '';
        $('#mensaggeRegisterValide').append(message);
    }
    //....................................................................... AUNTENTIFICACION CON CORREO Y CONTRASENIA
    /*Hace referente al hijo del modo raiz de la base de datos */
    $('#register').click(() => {
        let usersPassword = $('#users-password').val();
        let usersEmail = $('#users-email').val();
        if (usersEmail != '' && usersPassword != '' && $('#users-name').val() != '' && $('#user-last-name').val() != '' && $('#users-passwordTwo').val() != '') {
            let messageFormate = validateFormateEmail(usersEmail);
            if (messageFormate == true) {
                if (passwordValidate === 'passwordValido') {
                    const promise = firebase.auth()
                        .createUserWithEmailAndPassword(usersEmail, usersPassword)
                        .then(function (user) {
                            const nameUsers = $('#users-name').val() + ' ' + $('#users-last-name').val();
                            guardarDataCorreo(user, nameUsers, usersPassword, 'http://svgur.com/i/65U.svg');
                            return user.updateProfile({ 'displayName': nameUsers });
                        }).catch(function (error) {
                            viewMessage(mesaggeFirebase(error.message));
                        });
                } else {
                    viewMessage('Las contraseñas deben ser iguales');
                }
            } else {
                viewMessage(messageFormate);
            }
        } else {
            viewMessage('Llenar todos los campos');
        }
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
    //............................................................................  AUTHENTIFICACION ANOMINA
        $('#visitorPost').click(() => {
            firebase.auth().signInAnonymously().catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        });
    //...........................................................................INICIAR SESION
    $('#btnLogin').click(() => {
        const auth = firebase.auth();
        firebase.auth().languageCode = 'es';
        console.log(txtEmail.val(), txtPassword.val());
        const promise = auth.signInWithEmailAndPassword(txtEmail.val(), txtPassword.val());// devuelve una promesa que permita identificar al usuario o para detectar cualquien error y registrarlos en firebase
        promise.catch(e => {
            const errorEmail = e.message;
            document.getElementById('messageValide').innerHTML = '';
            $('#messageValide').append(mesaggeFirebase(errorEmail));

        });
    });

    // ...........................................................................VALIDACION ESTRUCTURA EMAIL    
    $('#txtEmail').bind('input', () => {
        validateEmail($('#icon-check'));
    });
    $('#users-email').bind('input', () => {
        validateEmail($('#icon-validate'));
    });

    //.........................................................................EVENTOS DISPLAY
    $('#btnSignUp').click(() => {
        $('#section-login').hide();
        $('#section-register-user').show();
    });
    $('#back-login').click(() => {
        $('#section-login').show();//.fadeOut( 1000 )
        $('#section-register-user').hide();
    });

    
    //........................................................................FUNCION REGISTRO A LA BASE DE DATOS
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
}