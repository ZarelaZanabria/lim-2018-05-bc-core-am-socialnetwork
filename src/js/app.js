window.onload = function() {
  alert("empezamos!!");
// Initialize Firebase
/*var config = {
  apiKey: "AIzaSyBwy0way-XvpLQTkY2EoKz5uSHhb23S3fo",
  authDomain: "pruebasalud-8632b.firebaseapp.com",
  databaseURL: "https://pruebasalud-8632b.firebaseio.com",
  projectId: "pruebasalud-8632b",
  storageBucket: "pruebasalud-8632b.appspot.com",
  messagingSenderId: "384943209525"
};
firebase.initializeApp(config);*/
// get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');
const btnLoginFacebook = document.getElementById('btnLoginFacebook');
const btnLoginGoogle = document.getElementById('btnLoginGoogle');
// add login events
//....................................................................... AUNTENTIFICACION CON CORREO Y CONTRASENIA
btnSignUp.addEventListener('click', e => {
  alert("hola me estoy registrando");
  // get sign up user
  const email = txtEmail.value;// validar correo
  const password = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email , password);// devuelve una promesa que permita identificar al usuario o para detectar cualquien error y registrarlos en firebase
  promise.catch(e => console.log(e.message));// para detectar un error
  // DONE: validar si ya esta registrado con el email
});
// add a realtime listener
/*Esto me ayuda saber cada vez que cambie el estado de autentificacion
- cuando el usuario entra a la web el parametro firebase(callback -> el usuario en firebase) tendra toda la informacion actual del usuario
- cuando el usuario sale tendra un valor vacio, entonces verificamos si existe el usuario logueado  */
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){// si existe el usuario lo insertamos a firebase console
      console.log(firebaseUser);
      btnLogOut.style.display = 'block';
  }else{// si no mostramos un mensaje de no regstrado 
      console.log('No registrado');
      btnLogOut.style.display = 'none';
  }
});
// add Log out
btnLogOut.addEventListener('click',e => {
    firebase.auth().signOut();
    btnLogOut.style.display = 'none';// cerrar secion o cambiar el estado de autentificacion 
});

btnLogin.addEventListener('click', e => {
    // get email and password
    alert("hola me estoy logueando");
    const email = txtEmail.value;// validar correo
    const password = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email , password);// devuelve una promesa que permita identificar al usuario o para detectar cualquien error y registrarlos en firebase
  
    promise.catch(e => console.log(e.message));// para detectar un error
    //DONE: validar si los datos son existentes 
  });
//...............................................................................AUTENTIFICACION CON GOOGLE
btnLoginGoogle.addEventListener('click', e => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');//para el acceso a la API de google 
    // para una VENTANA EMERGENTE
    firebase.auth (). signInWithPopup (provider) .then (function (result) {// Autentica un cliente de Firebase usando un flujo de autenticación OAuth basado en ventanas emergentes.
        var token = result.credential.accessToken;
        var user = result.user;//info 
        console.log('informacion del usuario logueado: '+user)
      }). catch (error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;    
        var credential = error.credential;

        if(errorCode === 'auth/account-exists-with-different-credential'){
          alert('Es el mismo usuario');
        }
        console.log('Error: '+errorCode+ ' y '+errorMessage+'\n El correo de la cuenta:'+email+'\n tipo de firebase que se uso: '+credential );
    });
    // para REDIRECCIONAMIENTO SOBRE TODO EN APP
    //firebase.auth().signInWithRedirect(provider);// Si se desea agregar el token hacer la misma estructura del emergente
});

// .................................................................... ........AUTENTIFICACION CON FACEBOOK
btnLoginFacebook.addEventListener('click', e => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');//https://developers.facebook.com/docs/facebook-login/permissions/?translation
    //406755143185347 id app
    firebase.auth (). signInWithPopup (provider) .then (function (result) {
      var token = result.credential.accessToken;
      var user = result.user;// La información del usuario que inició sesión.
      //console.log('Informacion del usuario logueado con facebok'+user);
    }). catch (error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
});


//...............................................................................Administrando database en tiempo real
const object = document.getElementById('Object');
// creando referencia
var dbRefObject =firebase.database().ref().child('object')// ref nos lleva a la raiz de la base de datos y al llamarla child crea una hija del object
// sincronizo 
dbRefObject.on('value',function(data) {// Metodo on lee los datos de una ruta de acceso y value detecta cambios en el contenido de la ruta y val contiene los datos
  console.log("hoaaaal");// que coños tienes buaaaaaa!!!
});
/* INSERTAR USUARIO
function writeUserData(userId, name, email, imageUrl) {
firebase.database().ref('users/' + userId).set({
  username: name,
  email: email,
  profile_picture : imageUrl
});
} */



















}