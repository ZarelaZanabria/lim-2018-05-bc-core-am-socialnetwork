const assert = require('chai').assert;
global.window = global;
global.firebase = require('firebase');
require("../src/js/data/dataRedSocial");
  // Initialize Firebase
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
 
    
    
   
  });