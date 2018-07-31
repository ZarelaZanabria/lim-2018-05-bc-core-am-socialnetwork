eventsGetPost=()=>{
    $('#send-post').click(() => {
        let post = $('#input-post').val();
        if (post != '') {
          insertNewPost($('#file').val(), post, $('#typePost').val());
          $('#div_new_post').hide();
          document.getElementById('div_new_post').innerHTML=''; 
          $("#input-post").disabled = true;
           readFile(); 
        }
      });
      $('#publicar-cancelar').click(() => {
        document.getElementById('div_new_post').innerHTML='';
        $('#div_new_post').hide();
      });
       function readFile(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
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