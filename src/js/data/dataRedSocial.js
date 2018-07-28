window.validateFormateEmail = (data) => {  
  if (data.indexOf('@') >= 5) {
    if ( Number.isNaN(parseInt(data.charAt(0))) == true ) {
      if (data.length - data.lastIndexOf(".") <= 5) {
        return true;
      } else { return 'dominio inexistente' }
    } else { return 'Formato correo invalido ' }
  } else { return 'email diminuto o invalido' }
}
