// ..........................................................................estado de autentificacion en tiempo real
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        let userLogin = firebaseUser.displayName;
        let photoUser = firebaseUser.photoURL;
        let componente = headerElement(userLogin,photoUser);
         $('#header-main').show();  
         $('#header-main').append(componente);
         $('#post-main').show();
        $('#post-main').append(sectionElement());
        $('#btnLogOut').show(); // aparece mi boton salir
        // login y register oculto
        $('#portada').hide();
        $('#contentLoginRegister').hide();
        $('#section-register-user').remove();
        $('#section-login').remove();
        eventsPost();// llamo a todos los eventos con post
    } else {// si no mostramos un mensaje de no regstrado 
        $('#header-main').hide();
        $('#header-main-content').remove();        
        loginElement();
        $('#contentLoginRegister').show();
        $('#post-main').hide();
        $('#portada').show();
        registerElement();   
        document.getElementById('post-main').innerHTML='';    
        document.getElementById('header-main').innerHTML='';
       
        console.log('No Autentificado');
        eventsLogin();// todos los eventos con login
    }
});

