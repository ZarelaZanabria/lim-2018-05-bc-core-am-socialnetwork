let uidPost;
let elementoUpdate = document.getElementsByClassName('update');
let elementoDelete = document.getElementsByClassName('delete');
let elementoLike = document.getElementsByClassName('icon-heart');
//.............................................................................CERRAR SESION
eventsPost = () => {
  let userId = dataUserLogin();
  for (let index = 0; index < elementoDelete.length; index++) {
    elementoDelete[index].addEventListener('click', () => {
      let dataDeletePost = elementoDelete[index].getAttribute("data-posts");
      let refDelete = firebase.database().ref('posts/' + dataDeletePost);
      refDelete.once('value', data => {
        let dataPost = data.val();
        if (dataPost.uidUser == userId.uid) {
          refDelete.remove();
        }
      })
    }, false);
  }

  for (let index = 0; index < elementoUpdate.length; index++) {
    elementoUpdate[index].addEventListener('click', () => {
      let dataUserUpdate = elementoUpdate[index].getAttribute("data-posts");
      refUsersUpdate = firebase.database().ref('posts/' + dataUserUpdate);//post
      refUsersUpdate.once('value', function (snap) {
        var datos = snap.val();
        uidPost = dataUserUpdate;
        if (datos.uidUser == userId.uid) {
          document.getElementById('input-post').value = datos.content;
          $('#send-post').hide();
          $('#edit-post').show();
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

  
  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
  });
  $('#send-post').click(() => {
    let post = $('#input-post').val();
    if (post != '') {
      insertNewPost($('#file').val(), post, $('#typePost').val());
      document.getElementById('input-post').value = '';
      readFile();
    }
  });
  $('#edit-post').click(() => {
    let post = $('#input-post').val();
   console.log(post);
      updateNewPost(post, $('#typePost').val(), uidPost);
      document.getElementById('input-post').value = '';
      $('#edit-post').hide();
      $('#send-post').show();
      readFile();
    
  });
  $('#publicar-cancelar').click(() => {
    document.getElementById('input-post').value = '';
    document.getElementById('file-preview-zone').innerHTML = '';
  });
  function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      console.log(input.files);
      reader.onload = function (e) {
        var filePreview = document.createElement('img');
        filePreview.id = 'file-preview';
        //e.target.result contents the base64 data from the image uploaded
        filePreview.src = e.target.result;
        var previewZone = document.getElementById('file-preview-zone');
        previewZone.innerHTML = '';
        previewZone.appendChild(filePreview);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  var fileUpload = document.getElementById('file');
  fileUpload.onchange = function (e) {
    readFile(e.srcElement);
  }






















}







