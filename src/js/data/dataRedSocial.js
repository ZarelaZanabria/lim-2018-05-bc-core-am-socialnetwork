//Declaracion de Variables 
//........................................................................FUNCION REGISTRO A LA BASE DE DATOS

window.guardarDataCorreo = (user, name, password, photoURL) => {
 /*  firebase.database().ref('Usuarios/' + user.uid).set({
    usersEmail: user.email,
    usersName: name,
    usersPassword: password,
    photoURL: photoURL,
  }); */
}
window.guardarData = (user) => {
  /* let usuario = {
    usersEmail: user.email,
    usersName: user.displayName,
    photoURL: user.photoURL,
  }
  firebase.database().ref('Usuarios/' + user.uid).set(usuario);  */
}

//.......................................................................VALIDACION DE CORREO ELECTRONICO
window.validateEmail = (idSpan) => {
  let campo = event.target;
  let val = campo.value;
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(val)) {
    idSpan.attr('class', 'icon-checkmark');
  } else {
    idSpan.attr('class', 'icon-cross');
  }
}

