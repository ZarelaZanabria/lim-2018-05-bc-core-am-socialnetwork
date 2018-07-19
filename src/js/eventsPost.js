
//.............................................................................CERRAR SESION
eventsPost = () => {
  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
  });
  $('#send-post').click(() => {
    insertNewPost($('#file').val(), $('#input-post').val(), $('#typePost').val(),null);
    modo=CREATE;
    readFile();
  });


  let elementoDelete = document.getElementsByClassName('delete');

  for (let index = 0; index < elementoDelete.length; index++) {
    elementoDelete[index].addEventListener('click', () => {
      let dataDeletePost = elementoDelete[index].getAttribute("data-posts");
      let refDelete = firebase.database().ref('posts/' + dataDeletePost);
      refDelete.remove();
    }, false);
  }

  let elementoUpdate = document.getElementsByClassName('update');
  console.log(elementoUpdate);
  for (let index = 0; index < elementoUpdate.length; index++) {
    elementoUpdate[index].addEventListener('click', () => {
      
      let dataUserUpdate = elementoUpdate[index].getAttribute("data-posts");
      refUsersUpdate = firebase.database().ref('posts/'+dataUserUpdate);//post
      refUsersUpdate.once('value', function (snap) {
        var datos = snap.val();
        document.getElementById('input-post').value = datos.content; 
        insertNewPost($('#file').val(), $('#input-post').val(), $('#typePost').val(),dataUserUpdate);    
    });
    document.getElementById('send-post').value = UPDATE;
    modo=UPDATE; 
    },false);

  }














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







