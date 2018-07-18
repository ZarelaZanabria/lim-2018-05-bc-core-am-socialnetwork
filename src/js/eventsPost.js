
//.............................................................................CERRAR SESION
eventsPost = () => {
  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
  });
  $('#send-post').click(() => {
    insertNewPost($('#file').val(), $('#input-post').val(), $('#typePost').val());
    readFile();
  });
  abrir = () => {
    /* const listPost = document.querySelectorAll('.content-allPost');
    listPost.addEventListener('click',event=>{
      console.log(event.target);
    }); */
    $('.action-content').show();
  }
  eliminar = (uidPost) =>{
    //console.log(uidPost+'hola');
    deletePost(uidPost);
    location.reload();
  }
  editar=()=>{
    $('.content-edit').show;
    document.getElementById('send-post').setAttribute('value','Modificar');
    $('.content-edit').append(sectionElement());
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







