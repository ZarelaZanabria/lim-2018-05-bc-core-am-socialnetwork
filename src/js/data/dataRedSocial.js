window.validateFormateEmail = (data) => {  
  if (data.indexOf('@') >= 5) {
    if (typeof (data.substr(0, 1)) == 'string') {
      if (data.length - data.lastIndexOf(".") <= 5) {
        return true;
      } else { return 'dominio inexistente' }
    } else { return 'Formato correo invalido ' }
  } else { return 'email diminuto o invalido' }
}