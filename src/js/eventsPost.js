
//.............................................................................CERRAR SESION
eventsPost = () => {
  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
  });
  $('#send-post').click(() => {
    insertNewPost($('#file').val(), $('#input-post').val(), $('#typePost').val());
    location.reload();
    readFile();
  });
  /* $('.icon-circle-down').click(() => {
    $('.action-content').show();
    alert('hola eliminar editar');
  }) */
  abrir = () => {
    /* const listPost = document.querySelectorAll('.content-allPost');
    listPost.addEventListener('click',event=>{
      console.log(event.target);
    }); */
    $('.action-content').show(); $('.menu-action-content-post').show();
  }
  eliminar = (uidPost) =>{
    deletePost(uidPost);
    $('.menu-action-content-post').hide();
  }
  editar=()=>{
    $('.menu-action-content-post').hide();
    $('.content-edit').show();
    document.getElementsByClassName('content-edit').innerHTML='';
    $('.content-edit').append(sectionElement());
    document.getElementById('send-post').setAttribute('value','Modificar');
  
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







