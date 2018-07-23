headerElement = (userLogin, photo, email) => {
  //    <a href="/src/muro.html" target="_blank" onClick="window.open(this.href, this.target, 'width=300,height=400'); return false;">lanza correctamente</a>

  return $('#header-main').append(`
  <div class='header-main-content'>
      <div class='header-section-user'>         
                  <div class='content-photo-view-profile' >
                      <img src='${photo}' alt='photo-profile' id="btnLogOut">                                                
                  </div>
                  <div class="name-view-data">
                      <p>${userLogin}</p>
                  </div> 
        
      </div>
  </div>
  <div class="hint-menu-account" id="hint_menu_account" style="display:none;">
      <div class="name-hint-account">
          <h4>${userLogin}</h4>
          <p>${email}</p>
      </div>
      <div class="wrap-hint-menu-account">
          <div class="photo-box">
              <div class="contain-photo">
                  <img src="${photo}" alt="">
                  <label for="">Change</label>
              </div>
          </div>
          <div class="item-hint">
              <ul>
                  <li>
                      <a href="#">
                          <span class="icon-user"></span>My account</a>
                  </li>
                  <li>
                      <a href="#">
                          <span class="icon-lock"></span>Change password</a>
                  </li>
                  <li>
                      <a href="#">
                          <span class="icon-cog"></span>Settings</a>
                  </li>
                  <li>
                      <a href="#">
                      <span class="icon-question"></span>Settings</a>
                  </li>
                  <li id="li_logout">
                      <a href="#">
                          <span class="icon-switch" ></span>Logout</a>
                  </li>
              </ul>
          </div>
      </div>
  </div>    
  <div class='header-section'>
      <div class=search>
          <input type='text' class='search-input'>
          <span class='icon-search'></span>
      </div>
  </div>
  `);
}
sectionElement = () => {
  return `
  <div>
      <input type='textare' autocomplete='off' id='view-input-post' class='input-post' placeholder='Que estas pensando?'>
      <div id='div_new_post'></div>
  </div>
  <div id='div_delete_post'></div> 
  <div id='div_edit_post'></div>              
`;
}
const newInsertPost =(uidPost)=>{
  return `
  <div class='form_delete_post'>
      <select id='typePost'>
          <option>Público</option>
          <option>Mis amigos</option>
          <option>Solo yo</option>
      </select>
      <input type='textare' autocomplete='off' id='input-post' class='input-post' placeholder='Que estas pensando?'>
      <div id='file-preview-zone'></div>
      <div class='accion-public'>                    
          <div class='public-image'>
              <input type="file" name="file" id="file" class="inputfile" />
              <label for="file" class='icon-images'>Foto/video</label>
          </div>                        
          <div id='button-post' >
              <input type='button' value='Modificar' id='edit-post' data-posts='${uidPost}' class='publicar-cancelar'>
              <input type='button' value='Publicar' id='send-post' class='publicar-cancelar'>
              <input type='button' value='Cancelar' class='publicar-cancelar' id='publicar-cancelar'>
          </div>
      </div> 
  </div>
            
              

  `}
const sectionAllPost = (user, photo, coment, image, like, time, idpost) => {
  return `
  <li class='content-allPost'>
      <div class='stream-item-header-allPost'>
          <img class='photo-profile-user-post' src='${photo}' alt='photo'>    
          <div class='profile-user-post'>               
              <span class='full-name-user'>
                  <strong> ${user}</strong>
              </span>            
              <small class='time' id='time'>
                  <span class='time-post-regresivo'>${time}</span>
              </small>
              <div class='button-editar-eliminar' id='button-editar-eliminar' data-posts='${idpost}'>
                  <span class='icon-pencil update' data-posts='${idpost}'></span>
                  <span class='icon-cancel-circle delete' data-posts='${idpost}'></span>                   
              </div>
              
          </div>
      </div>        
      <div class='post-text-container'>
          <p>${coment}</p>    
      </div>
      <div class='post-container'>
      
      </div>
      <div class='content-edit'></div>
      <div class='stream-item-footer'>
          <div class='acciones-post'>
          <div class='acction'>
              <div class='icon-likes-post'>
                  <span class='icon-heart' data-posts='${idpost}'></span >
                  <label class='count-like-post'>${like}</label>
              </div>
              <div class='icon-likes-post'>
                  <span class='icon-share2'></span >
                  <label class='count-share-post'>0</label>
              </div>
          </div>
          <div class='content-coment-post'>
              <div class='comentar-post'>
                  <input type='text' placeholder='Agregar un comentario'>
              </div>
          </div>
          </div>

      </div>            
  </li>`;//<div class='post-container'> </div>
}
deletePostElement = (coment, uidPost) => {
  return `
  <div id='form_delete_post' class='form_delete_post'>
  <h4>Se eliminará este post</h4>
      <div class="box-input">  
          <p>${coment}</p>      
      </div>
      <div class="contain-button-search">                    
          <button type="button" name="button" id="hide_form_search">Close</button>
          <button type="button" name="button" data-posts='${uidPost}' class="delete-post">Eliminar</button>                        
      </div>
  </div>
`;
}
EditPostElement = (img, title) => {
  return `<div></div>`;
}
registerElement = () => {
  return $('#contentLoginRegister').append(`<div id="section-register-user" class="content-login">
      <form>
          <div class="form-login">
              <div>
                  <span class="icon-circle-left" id="back-login"></span>
                  <h3>SIGN UP</h3>
              </div>                
              <div class="section-Text">
                  <div class="section-value">
                      <input type="text" placeholder="User Name" id="users-name" class="input-user">
                  </div>
                  <div class="section-value">
                      <input type="text" placeholder="Last Name" id="users-last-name" class="input-user">
                  </div>
                  <div class="section-value">
                      <input type="text" placeholder="Email" id="users-email" >
                      <span id="icon-validate"></span>
                  </div>
                  <div class="section-value">
                      <input type="password" placeholder="Password" id="users-password" class="input-user">
                  </div>
                  <div class="section-value">
                      <input type="password" placeholder="Repeat Password" id="users-passwordTwo">
                      <span id="icon-validate-password"></span>
                  </div>
              </div>
              <div class="section-Button">
                  <input type="button" name="" id="register" value="Registrar">
                  <p id="mensaggeRegisterValide"></p>
              </div>

          </div>

      </form>
  </div>`);
}
loginElement = () => {
  return $('#contentLoginRegister').append(`<div id="section-login" class="content-login">
      <form>
          <div class="logo">
              <img src="https://png.icons8.com/windows/1600/stork.png" alt="logo">
          </div>
          <div class="form-login">
              <div class="section-Text">
                  <div class="section-value">
                      <input type="text" placeholder="Email" id="txtEmail" class="value-data">
                      <span id="icon-check"></span>
                  </div>
                  <div class="section-value">
                      <input type="password" placeholder="Password" id="txtPassword" class="input-user">
                  </div>
              </div>
              <div class="section-Button">
                  <input type="button" id="btnLogin" value="LOGIN">
                  <p id="messageValide"></p>
                  <span class="or">--------------or--------------</span>
              </div>
          </div>
          <div class="loginAditional">
              <span>
                  <a id="btnSignUp" class="icon-mail2"></a>
              </span>
              <span>
                  <a id="btnLoginFacebook" class="icon-facebook"></a>
              </span>
              <span>
                  <a id="btnLoginGoogle" class="icon-google"></a>
              </span>

              <!-- <input type="button"  value="Facebook">
          <input type="button"   value="Google"> -->
          </div>

      </form>
  </div>`);
}
