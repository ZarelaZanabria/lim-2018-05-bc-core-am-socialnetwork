// ..........................................................................estado de autentificacion en tiempo real

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        let userLogin = firebaseUser.displayName;
        let photoUser = firebaseUser.photoURL;
        let email = firebaseUser.email;
        let uid = firebaseUser.uid;
        let componente;
        if(photoUser != null){
            componente = headerElement(userLogin, photoUser,email,uid);
        }else{
            componente = headerElement(userLogin,'http://svgur.com/i/65U.svg',email,uid);
        }        
        $('#portada').hide();
        $('#contentLoginRegister').hide();
        $('#section-register-user').remove();
        $('#section-login').remove();

        if(userLogin==null && photoUser===null&& email == null){
            viewPost (); 
            eventsPost();
            $('.header-section-user').hide();
            $('#new_posts').hide();            
            $('.visitante-anonimus').show();
        }else{            
            document.getElementById('newPost').innerHTML='';     
            $('#header-main').show();        
            $('#post-main').show();
            $('#btnLogOut').show(); 
            $('#header-main').append(componente);
            $('#newPost').append(sectionElement());
            $('#new_posts').show();
            $('.visitante-anonimus').hide();
            viewPost (); 
            eventsPost();
            dataUserLogin(uid);
        }  
    } else {// si no mostramos un mensaje de no regstrado 
        $('.visitante-anonimus').hide();
        $('#new_posts').hide();
        $('#header-main').hide();
        $('#header-main-content').remove();
        loginElement();
        $('#contentLoginRegister').show();
        $('#post-main').hide();
        registerElement();
/*         document.getElementById('post-main').innerHTML = '';
 */        document.getElementById('header-main').innerHTML = '';
        console.log('No Autentificado');
        eventsLogin();// todos los eventos con login
    }
});
