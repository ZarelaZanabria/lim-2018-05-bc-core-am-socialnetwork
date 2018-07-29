describe('data', () => {

  it('debería exponer función validateFormateEmail en objeto global', () => {
    assert.isFunction(validateFormateEmail);
  });

  it('debería exponer función mesaggeFirebase en objeto global', () => {
    assert.isFunction(mesaggeFirebase);
  });

  describe('Funcion validateEmail ', () => {
    it('debería retornar TRUE, al ingresar email(zarelixzana@gmail.com) ', () => {
      assert.equal(validateFormateEmail('zarelixzana@gmail.com'), true);
    });

    it('debería retornar Email diminuto o invalido, al ingresar email(z@gmail.com) ', () => {
      assert.equal(validateFormateEmail('z@gmail.com'), 'email diminuto o invalido');
    });

    it('debería retornar Dominio inexistente, al ingresar email(zarelix@gmail) ', () => {
      assert.equal(validateFormateEmail('zarelix@gmail'), 'dominio inexistente');
    });

    it('debería retornar Formato correo invalido, al ingresar email(1zarelixzana@gmail.com', () => {
      assert.equal(validateFormateEmail('1zarelixzana@gmail.com'), 'Formato correo invalido');
    });

  });

  describe('Validar los campos para el registro de Usuarios', () => {
    let pausa = 'break';

    it('Si la contraseña es menor que seis muestra INGRESE CONTRASEÑA CON MIN 6 CARACTERES', () => {
      assert.equal(mesaggeFirebase('Password should be at least 6 characters'), ('Ingrese contraseña con min 6 caracteres'), 'break');

    });

    it('Si el email es invalido muestra INGRESE UN CORREO VALIDO', () => {
      assert.equal(mesaggeFirebase('The email address is badly formatted.'), 'Ingrese un correo valido', 'break');
    });

    it('Si el usuario se registra con un correo ya registrado muestra ESTE CORREO YA ESTA REGISTRADO', () => {
      assert.equal(mesaggeFirebase('The email address is already in use by another account.'), 'Este correo ya esta registrado', 'break');
    });

    it('Si la contraseña no es válida o el usuario no tiene una contraseña muestra PASSWORD INCORRECTO', () => {
      assert.equal(mesaggeFirebase('The password0 is invalid or the user does not have a password.'), 'Password Incorrecto', 'break');
    });

    it('Si no hay registro del usuario muestra EL USUARIO NO EXISTE', () => {
      assert.equal(mesaggeFirebase('There is no user record corresponding to this identifier. The user may have been deleted.'), 'El usuario no existe', 'break');
    });

  });

  describe("Login con redesSociales", () => {

    var firebasemock = require('firebase-mock');

    var mockauth = new firebasemock.MockAuthentication();
    var mockdatabase = new firebasemock.MockFirebase();
    var mockfirestore = new firebasemock.MockFirestore();
    var mockstorage = new firebasemock.MockStorage();
    var mockmessaging = new firebasemock.MockMessaging();
    var mocksdk = new firebasemock.MockFirebaseSdk(
      (path) => {
        return path ? mockdatabase.child(path) : mockdatabase;
      },
      () => {
        return mockauth;
      },
      () => {
        return mockfirestore;
      },
      () => {
        return mockstorage;
      },
      () => {
        return mockmessaging;
      }
    );

    describe('Cuando el usuario quiere logearse a traves de la red social ', () => {
      it('Cuando el usuario de se Logea por Facebbok', () => {
        assert.isFunction(loginFacebook);
        mocksdk.auth().autoFlush();
        var mockFacebook = new mocksdk.auth.FacebookAuthProvider();
        mocksdk.auth().signInWithPopup(mockFacebook);
        loginFacebook();
      });
    });

  });


});
