let uidPost;
let elementoUpdate = document.getElementsByClassName('update');
let elementoDelete = document.getElementsByClassName('delete');
let elementoLike = document.getElementsByClassName('icon-heart');
//.............................................................................CERRAR SESION
eventsPost = () => {
  console.log('llamando al event post '+new Date());
  let userId = dataUserLogin();
  for (let index = 0; index < elementoDelete.length; index++) {
    elementoDelete[index].addEventListener('click', () => {
      let dataDeletePost = elementoDelete[index].getAttribute("data-posts");
      let refDelete = firebase.database().ref('posts/' + dataDeletePost);
      refDelete.once('value', data => {
        let dataPost = data.val();
        if (dataPost.uidUser == userId.uid) {
          $('#div_delete_post').append(deletePostElement(dataPost.content, dataDeletePost));
          $(".form_delete_post").show();
          eventsDeletePost();
        }
      })
    }, false);
  }  /*
   secction.addeventListener('click',(e)=>{
    console.log(event.target.type);
    if(element && element.nodeName==='  INPUT' ){
        // si es el elememto especifico entonces ejecuta una accion
    }
}) 
elementoDelete.addEventListener('click',function(){
   
  },false);*/
  for (let index = 0; index < elementoUpdate.length; index++) {
    elementoUpdate[index].addEventListener('click', () => {
      let dataUserUpdate = elementoUpdate[index].getAttribute("data-posts");
      refUsersUpdate = firebase.database().ref('posts/' + dataUserUpdate);//post
      refUsersUpdate.once('value', function (snap) {
        var datos = snap.val();
        if (datos.uidUser == userId.uid) {
          $('#div_new_post').append(newInsertPost(dataUserUpdate,datos.content));
          document.getElementById('input-post').value = datos.content;
          $("#input-post").disabled = true;
          $('#send-post').hide();
          $('#edit-post').show();
          eventsUpdatePost();
        }
      });
    });
  }
  for (let index = 0; index < elementoLike.length; index++) {
    elementoLike[index].addEventListener('click', () => {
      let dataLikePost = elementoLike[index].getAttribute("data-posts");
      Like(dataLikePost);
    }, false);

  } 
    
  $('#btnLogOut').click(() => {//imagen profile
    $('#hint_menu_account').show();
  });
  $('#li_logout').click(() => {
    firebase.auth().signOut();
  });
  $('#view-input-post').click(() => {
    console.log(new Date());
    document.getElementById('div_new_post').innerHTML='';
    $('#div_new_post').append(newInsertPost(null,''));
    $("#input-post").disabled = true;
    eventsGetPost();
  });  
  $('#header_my_account').click(() => {//ver perfil
    document.getElementById('items-post').innerHTML = '';
    viewMyAccount();
  });
  $('.icon-home2').click(()=>{// ir al home2
    document.getElementById('items-post').innerHTML = '';
    viewPost (); 
  });
  $('.search-input').keyup(function(e) {
    let value=event.target.value;
    let data=searchUsers(value);// envio los datos
    //console.log(data);
   // listarUsuarios(data);// enviar a imprimir
  });

  const listarUsuarios=data=>{
    document.getElementsByClassName('content-search-user').innerHTML+=`<li id='${data.uidUser}'>${data.nameUser}<li>`
  }

}







