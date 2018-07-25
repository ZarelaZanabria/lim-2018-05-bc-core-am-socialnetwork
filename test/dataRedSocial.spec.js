const assert = require('chai').assert;
global.window = global;
global.firebase = require('firebase');
require('../src/js/data/dataRedSocial');
require('./dataRedSocial.spec.js');


var config = {
  apiKey: "AIzaSyBwy0way-XvpLQTkY2EoKz5uSHhb23S3fo",
  authDomain: "pruebasalud-8632b.firebaseapp.com",
  databaseURL: "https://pruebasalud-8632b.firebaseio.com",
  projectId: "pruebasalud-8632b",
  storageBucket: "pruebasalud-8632b.appspot.com",
  messagingSenderId: "384943209525"
};
firebase.initializeApp(config);



describe('data', () => {

  it('debería exponer función guardarDataCorreo en objeto global', () => {
    assert.isFunction(guardarDataCorreo);
  });

  it('debería exponer función guardarData en objeto global', () => {
    assert.isFunction(guardarData);
  });
/* 
  describe('debería exponer función guardarData en objeto global', () => {

    it('la función guardarData deberia tener un Objeto Usuario con propiedades', function () {
    
        let Usuarios = {
         
          usersEmail: 'zarelixzana@gmail.com',
          usersName: 'zarela',
          photoURL: null,
        }
      

      const dataUser = guardarData(Usuarios)
      assert.isObject(dataUser, 'tea selection is an object');
    }); 

  }); */

  it('debería exponer función validateEmail en objeto global', () => {
    assert.isFunction(validateEmail);
  });

});
