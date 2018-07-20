sectionElement = () => {
  return `<select id='typePost'>
                <option>Público</option>
                <option>Mis amigos</option>
                <option>Solo yo</option>
            </select>
            <input type='textarea' id='input-post' class='input-post' placeholder='En quien estas pensando?'><br>
            <div id='file-preview-zone'></div>
            <div class='accion-public'>                    
                <div class='public-image'>
                    <input type="file" name="file" id="file" class="inputfile" />
                    <label for="file" class='icon-images'>  Foto/video</label>
                </div>                        
                <div id='button-post' >
                    <input type='button' value='Modificar' id='edit-post' class='publicar-cancelar'>
                    <input type='button' value='Publicar' id='send-post' class='publicar-cancelar'>
                    <input type='button' value='Cancelar' class='publicar-cancelar' id='publicar-cancelar'>
                </div>
            </div>  
              
`;
}