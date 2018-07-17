
//.............................................................................CERRAR SESION
eventsPost = () => {
  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
  });
  $('#send-post').click(() => {
    insertNewPost('segundooo', 'ESTOY FELIZ LABORATORIA XD', 'publico')
  });
}
$('.icon-circle-down').click(() => {
    $('.action-content').show();
});



