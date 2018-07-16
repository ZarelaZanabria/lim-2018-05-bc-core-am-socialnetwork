
//.............................................................................CERRAR SESION
eventsPost=()=>{
  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
});  
}
