let txtPassword = $('#txtPassword');
let passwordUsers = $('#users-password');
let txtEmail = $('#txtEmail');
let refUsers;//referencia a la bd del usuario
let passwordValidate;
eventsLogin = () => {

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
  const validarcong = (data) => {
    alert(data.lenght);
  }

  //...............................................................................AUTENTIFICACION CON GOOGLE
  $('#btnLoginGoogle').click(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    // para una VENTANA EMERGENTE
    firebase.auth()
      .signInWithPopup(provider)
      .then(function (result) {// Autentica en Firebase usando un flujo de autenticación OAuth basado en ventanas emergentes.
        console.log (result)
        /* guardarData(result.user); */
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
        console.log (result)
        /* guardarData(result.user); */
      }).catch(error => {
        console.log(error.code, error.message, error.email, error.credential);
      });
  });


  // ...........................................................................VALIDACION ESTRUCTURA EMAIL    
  $('#txtEmail').bind('input', () => {
    validateEmail($('#icon-check'));
  });
  $('#users-email').bind('input', () => {
    validateEmail($('#icon-validate'));
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

  //.........................................................................EVENTOS DISPLAY
  $('#btnSignUp').click(() => {
    $('#section-login').hide();
    $('#section-register-user').show();
  });
  $('#back-login').click(() => {
    $('#section-login').show();//.fadeOut( 1000 )
    $('#section-register-user').hide();
  });


  //....................................................................... AUNTENTIFICACION CON CORREO Y CONTRASENIA
  /*Hace referente al hijo del modo raiz de la base de datos */
  refUsers = firebase.database().ref().child('Usuarios');
  $('#register').click(() => {
    validarcong($('#users-email').val());
    if ($('#users-email').val() != '' && $('#users-password').val() != '' && $('#users-name').val() != '' && $('#user-last-name').val() != '' && $('#users-pasword').val() != '' && $('#users-passwordTwo').val() != '') {
      if (passwordValidate === 'passwordValido') {
        const promise = firebase.auth()
          .createUserWithEmailAndPassword($('#users-email').val(), $('#users-password').val())
          .then(function (user) {
            const nameUsers = $('#users-name').val() + ' ' + $('#users-last-name').val();
            guardarDataCorreo(user, nameUsers, $('#users-password').val(), 'http://svgur.com/i/65U.svg');
            return user.updateProfile({ 'displayName': nameUsers });
          }).catch(function (error) {
            console.log(error.message);
            const errorEmail = error.message;
            document.getElementById('mensaggeRegisterValide').innerHTML = '';
            if (errorEmail === 'Password should be at least 6 characters') {
              $('#mensaggeRegisterValide').append('Ingrese contraseña con min 6 caracteres');
            }
            if (errorEmail === 'The email address is badly formatted.') {
              $('#mensaggeRegisterValide').append('Ingrese un correo valido');
            }
            if (errorEmail === 'The email address is already in use by another account.') {
              $('#mensaggeRegisterValide').append('Este correo ya esta registrado');
            }
          });
        refUsers.on('value', function (snap) {
          let dataUsers = snap.val();
        });
      } else {
        debugger
        document.getElementById('mensaggeRegisterValide').innerHTML = '';
        document.getElementById('users-passwordTwo').innerHTML = '';
        $('#mensaggeRegisterValide').append('Las contraseñas deben ser iguales');
      }
    } else {
      document.getElementById('mensaggeRegisterValide').innerHTML = '';
      document.getElementById('mensaggeRegisterValide').innerHTML = 'Llenar campos';
    }

  });


    //...........................................................................INICIAR SESION
    $('#btnLogin').click(() => {

      const auth = firebase.auth();
      firebase.auth().languageCode = 'es';
      console.log(txtEmail.val(), txtPassword.val());
      const promise = auth.signInWithEmailAndPassword(txtEmail.val(), txtPassword.val());// devuelve una promesa que permita identificar al usuario o para detectar cualquien error y registrarlos en firebase
      promise.catch(e => {
        console.log(e.message);
        const errorEmail = e.message;
  
        document.getElementById('messageValide').innerHTML = '';
        if (errorEmail === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
          return $('#messageValide').append('El usuario no existe');
        }
        if (errorEmail === 'The password is invalid or the user does not have a password.') {
          return $('#messageValide').append('Password Incorrecto');
        }
        if (errorEmail === 'The email address is badly formatted.') {
          return $('#messageValide').append('Ingrese un correo valido');
        }
      });
    });

}
