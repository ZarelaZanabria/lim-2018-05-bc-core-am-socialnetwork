// ..........................................................................estado de autentificacion en tiempo real
firebase.auth().onAuthStateChanged(firebaseUser => {
    alert("cambio!");
    if (firebaseUser) {
        console.log(firebaseUser);
        let userLogin = firebaseUser.displayName;
        let photoUser = firebaseUser.photoURL;
        let email = firebaseUser.email;
        let componente;
        if(photoUser != null){
            componente = headerElement(userLogin, photoUser,email);
        }else{
            componente = headerElement(userLogin,'http://svgur.com/i/65U.svg');
        }
        
        $('#header-main').show();
        $('#header-main').append(componente);
        $('#post-main').show();
        $('#newPost').append(sectionElement());
        $('#btnLogOut').show(); // aparece mi boton salir
        // login y register oculto
        $('#portada').hide();
        $('#contentLoginRegister').hide();
        $('#section-register-user').remove();
        $('#section-login').remove();      
        viewPost (); 
        eventsPost();

    } else {// si no mostramos un mensaje de no regstrado 
        $('#header-main').hide();
        $('#header-main-content').remove();
        loginElement();
        $('#contentLoginRegister').show();
        $('#post-main').hide();
        registerElement();
       /*   document.getElementById('post-main').innerHTML = '';  */
        document.getElementById('header-main').innerHTML = '';
        console.log('No Autentificado');
        eventsLogin();// todos los eventos con login
    }
});
