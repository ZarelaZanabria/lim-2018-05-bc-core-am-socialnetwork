// ..........................................................................estado de autentificacion en tiempo real

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        let userLogin = firebaseUser.displayName;
        let photoUser = firebaseUser.photoURL;
        let email = firebaseUser.email;
        let uid = firebaseUser.uid;
        let componente;
        if(photoUser != null){//sesion con google y facebook
            componente = headerElement(userLogin, photoUser,email,uid);
        }else{
            if(userLogin !=null){// sesion con correo autentificacion no tiene foto
                componente = headerElement(userLogin,'http://svgur.com/i/65U.svg',email,uid);
            }else{// registrarme, cuando entro la primera vez name aun no retorna y autentificacion no tiene foto
                 const nameUsers = $('#users-name').val() + ' ' + $('#users-last-name').val();
                 componente = headerElement(nameUsers,'http://svgur.com/i/65U.svg',email,uid);
            }
           
        }        
        $('#portada').hide();
        $('#contentLoginRegister').hide();
        $('#section-register-user').remove();
        $('#section-login').remove();

        if(userLogin==null && photoUser===null&& email == null){
            viewPost (); 
            eventsPost();
            $('#header-main').show();        
            $('#post-main').show();
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
        $('#portada').show();
        $('.visitante-anonimus').hide();
        $('#new_posts').hide();
        $('#header-main').hide();
        $('#header-main-content').remove();
        loginElement();//componente login
        $('#contentLoginRegister').show();
        $('#post-main').hide();
        registerElement();//componentes register
        document.getElementById('header-main').innerHTML = '';
        eventsLogin();// todos los eventos con login
    }
});

