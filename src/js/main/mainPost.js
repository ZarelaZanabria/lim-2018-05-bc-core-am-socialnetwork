let uidPost;
let elementoUpdate = document.getElementsByClassName('update');
let elementoDelete = document.getElementsByClassName('delete');
let elementoLike = document.getElementsByClassName('icon-heart');
let popup = false;
eventsPost = () => {
  let userId = firebase.auth().currentUser;
  // eliminar post
  for (let index = 0; index < elementoDelete.length; index++) {
    elementoDelete[index].addEventListener('click', () => {
      let dataDeletePost = elementoDelete[index].getAttribute("data-posts");
      let refDelete = firebase.database().ref('posts/' + dataDeletePost);
      refDelete.once('value', data => {
        let dataPost = data.val();
        if (dataPost.uidUser == userId.uid) {
          $('#div_new_post').show();
          document.getElementById('div_new_post').innerHTML = '';
          $('#div_new_post').append(deletePostElement(dataPost.content, dataDeletePost));//aparece el popup
          eventsDeletePost();//llamo el evento para ese componenete
        }
      })
    }, false);
  }
  //actualizar post
  for (let index = 0; index < elementoUpdate.length; index++) {
    elementoUpdate[index].addEventListener('click', () => {
      let dataUserUpdate = elementoUpdate[index].getAttribute("data-posts");
      refUsersUpdate = firebase.database().ref('posts/' + dataUserUpdate);//post
      refUsersUpdate.once('value', function (snap) {
        var datos = snap.val();
        if (datos.uidUser == userId.uid) {
          $("#div_new_post").show();
          document.getElementById('div_new_post').innerHTML = '';
          $('#div_new_post').append(newInsertPost(dataUserUpdate, datos.content));
          document.getElementById('titlePopup').innerHTML = '';
          document.getElementById('titlePopup').innerHTML = 'Se modificará';
          document.getElementById('input-post').value = datos.content;
          $("#input-post").disabled = true;
          $('#send-post').hide();
          $('#edit-post').show();
          eventsUpdatePost();
        }
      });
    });
  }
  // like post
  for (let index = 0; index < elementoLike.length; index++) {
    elementoLike[index].addEventListener('click', () => {
      let dataLikePost = elementoLike[index].getAttribute("data-posts");
      Like(dataLikePost);
    }, false);
  }
  //configuracion perfil
  $('#header-section-user').click(() => {
    $('#hint_menu_account').show();
    popup = true;
  });
  // cerrar sesion
  $('#li_logout').click(() => {
    firebase.auth().signOut();
  });
  //iniciar publicacion de un nuevo post en pop up
  $('#view-input-post').click(() => {
    document.getElementById('div_new_post').innerHTML = '';
    $('#div_new_post').show();
    $('#div_new_post').append(newInsertPost(null, ''));// al pop up no envio datos a diferencia del update
    document.getElementById('titlePopup').innerHTML = '';// asigno nuevo titulo al pop up
    document.getElementById('titlePopup').innerHTML = 'Nuevo Post';
    $("#input-post").disabled = true;
    eventsGetPost();
  });
  //ver perfil
  $('#header_my_account').click(() => {
    document.getElementById('items-post').innerHTML = '';
    let uidUser = $('#header_my_account').attr('data-posts');
    viewMyAccount(uidUser);
    $('#hint_menu_account').hide();

  });
  //lista de los que coinciden en la busqueda
  $('.content-search-user').click(e => {
    let element = event.target;
    document.getElementById('items-post').innerHTML = '';
    viewMyAccount(element.id);
    $('.content-search-user').hide();
  });
  // home
  $('.icon-home2').click(() => {// ir al home2
    document.getElementById('items-post').innerHTML = '';
    viewPost();
  });
  //input de busqueda
  $('.search-input').keyup(function (e) {
    $('.content-search-user').show();
    let value = event.target.value;
    let objetouser;
    objetouser = searchUsers(value);// envio los datos
    listarUsuarios(objetouser);// enviar a imprimir
    popup = true;
  });
  // botones empezar y visitar
  $('#anonimus-login-main').click(() => {
    firebase.auth().signOut();
  });
  $('#anonimus-register-main').click(() => {
    firebase.auth().signOut();
    $('#section-login').hide();
    $('#section-register-user').show();
  });
  // publicar nuevo por icon lapiz
  $('.new_posts').click(() => {
    document.getElementById('div_new_post').innerHTML = '';
    $('#div_new_post').show();
    $('#div_new_post').append(newInsertPost(null, ''));
    document.getElementById('titlePopup').innerHTML = '';
    document.getElementById('titlePopup').innerHTML = 'Nuevo Post';
    $("#input-post").disabled = true;
    eventsGetPost();
  });

  const listarUsuarios = data => {
    data.on('value', datos => {
      document.getElementById('content-search-user').innerHTML = '';
      let dataUser = datos.val();
      for (const key in dataUser) {
        document.getElementById('content-search-user').innerHTML += searchElement(dataUser[key].usersName, key);
      }
    });
  }
  document.onclick = e => {
    if (popup == true) {
      if (document.getElementById('hint_menu_account').style.display == 'block' || document.getElementById('content-search-user').style.display == 'block') {// no jquery ejecuta no compara
        e = e || event;
        let target = e.target || e.srcElement;
        let elemento = document.getElementById("hint_menu_account");
        let ver = document.getElementById("header-section-user");
        let elementoBuscador = $('#content-search-user');
        do {
          if (elemento == target || elementoBuscador == target) {
            return;
          }
          if (ver == target) {
            elemento.style.display = 'block';
            return;
          }
          target = target.parentNode;
        } while (target) {
          elemento.style.display = 'none';
          elementoBuscador.hide();

        }
      }
    }
  }


}




