window.loginFacebook=()=>{
  const provider = new firebase.auth.FacebookAuthProvider();
 /*  provider.addScope('public_profile');//https://developers.facebook.com/docs/facebook-login/permissions/?translation */
  firebase.auth().signInWithPopup(provider)
      .then( (result)=> {
          guardarData(result.user);
      }).catch(error => {
          
      }); 
}


window.validateFormateEmail = (data) => {
  if (data.indexOf('@') >= 5) {
    if (Number.isNaN(parseInt(data.charAt(0))) == true) {
      if (data.length - data.lastIndexOf(".") <= 5) {
        return true;
      } else { return 'dominio inexistente' }
    } else { return 'Formato correo invalido' }
  } else { return 'email diminuto o invalido' }
}

window.mesaggeFirebase = (message) => {
  switch (message) {
    case 'Password should be at least 6 characters':
      return 'Ingrese contraseña con min 6 caracteres';
      break;
    case 'The email address is badly formatted.':
      return 'Ingrese un correo valido';
      break;
    case 'The email address is already in use by another account.':
      return 'Este correo ya esta registrado';
      break;
    case 'The password0 is invalid or the user does not have a password.':
      return 'Password Incorrecto';
      break;
    case 'There is no user record corresponding to this identifier. The user may have been deleted.':
      return 'El usuario no existe';
      break;
  }
}




