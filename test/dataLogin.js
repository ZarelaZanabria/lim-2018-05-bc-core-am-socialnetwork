const assert = require('chai').assert;
global.window = global;
global.firebase = require('firebase');
require("../src/js/data/dataLogin");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdzJtiOwXB13ksX1j7MbVUJcS1WilTe-o",
    authDomain: "modomama-af9f1.firebaseapp.com",
    databaseURL: "https://modomama-af9f1.firebaseio.com",
    projectId: "modomama-af9f1",
    storageBucket: "modomama-af9f1.appspot.com",
    messagingSenderId: "22604766458"
  };
  firebase.initializeApp(config);


  describe('data', () => {
   
    it('debería exponer función guardarDataCorreo en objeto global', () => {
      assert.isFunction(guardarDataCorreo);
    }); 
 
    
    
   
  });