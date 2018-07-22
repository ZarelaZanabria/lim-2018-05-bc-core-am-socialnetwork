//Primer paso...ver si el usuario esta logeado o no logeado
// ..........................................................................estado de autentificacion en tiempo real


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        let userLogin = firebaseUser.displayName;
        let photoUser = firebaseUser.photoURL;
        let componente;
        if(photoUser != null){
            componente = headerElement(userLogin, photoUser);
        }else{
            componente = headerElement(userLogin,'http://svgur.com/i/65U.svg');
        }
        
      /*   $('#header-main').show(); */
        $('#header-main').append(componente).show();
        $('#post-main').show();
        $('#newPost').append(sectionElement());
        $('#btnLogOut').show(); // aparece mi boton salir
        // login y register oculto
        $('#portada').remove();
        $('#contentLoginRegister').hide();
        $('#section-register-user').remove();
        $('#section-login').remove();      
        /* viewPost (); 
        eventsPost(); */
        

    } else {// si no mostramos un mensaje de no regstrado 
        $('#portada').show();
        $('#header-main').hide();
        $('#header-main-content').remove();
        loginElement();
        $('#portada').show();
        $('#contentLoginRegister').show();
        $('#post-main').hide();
        registerElement();
        /* document.getElementById('post-main').innerHTML = '';
        document.getElementById('header-main').innerHTML = ''; */
        console.log('No Autentificado');
        eventsLogin();// todos los eventos con login
    }
});

