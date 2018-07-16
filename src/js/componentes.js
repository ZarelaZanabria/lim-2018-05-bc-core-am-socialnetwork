headerElement = (userLogin,photo) =>{
    return $('#header-main').append(`
    <div class='header-main-content'>
        <div class='header-section'>
            <div class='menu-header-main'>
                <span class='icon-menu'> </span>
            </div>
        </div>
        <div class='header-section'>
            <div class='logo-web'>
                <span class='icon-user'></span>
            </div>            
        </div>
        <div class='header-section'>
            <div class=search-content>
                <input type='text' class='search-input'>
                <span class='icon-search'></span>
            </div>
        </div>
        <div class='header-section'>
            <nav>
                <ul>
                    <li class='menu-profile-user'>
                        <img src='${photo}' alt='photo-profile'>
                        <div id="welcomeProfile"> ${userLogin}</div>                        
                    </li>
                    <li class='icon-question'></li>
                    <li class='icon-config'>
                        <button type="button" id="btnLogOut" value="Salir">Cerrar Sesion</button>
                    </li>
                    <span class="icon-switch"></span>
                </ul>
            </nav>
        </div>
    </div>`);
}
sectionElement = () => {
    return `
    <div class = 'devsite-main-content'>
        <div class = 'devsite-banner-content'>
            <div class = 'devsite-section-nav'>
            </div>
            <div class = 'devsite-post'>
                <div class='newPost'>
                    <select>
                        <option>Público</option>
                        <option>Mis amigos</option>
                        <option>Solo yo</option>
                    </select>
                    <p type='text' id='input-post' value='En quien estas pensando?'><br>
                    <div id='button-post'>
                        <input type='button' value='Publicar' id='send-post'>
                        <input type='button' value='Cancelar'>
                    </div>
                </div >
                <div class='content-post'>
                    <div class='stream-item-header'>
                        <a class='profile-user-post'>
                            <img class='photo-profile-user-post' url='{http}'>
                            <span class='full-ame-user'>
                                <strong> Noely Flores{nameUser}</strong>
                            </span>
                        </a>
                        <small class='time'>
                            <span class='time-post-regresivo'>25{time}</span>
                        </small>
                        <div class='icon-circle-down'>
                            <div class='action-content'>
                                <span></span>
                                <div class='menu-action-content-post'>
                                    <ul>
                                    <li>Editar</li>
                                    <li>Eliminar</li>
                                    <ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='post-text-container'>
                        <p>{post-text} hoola mamitas tengo un ninio de 1 anio y aun no puede caminar</p>    
                    </div>
                    <div class='post-container'></div>
                    <div class='stream-item-footer'>
                        <div class='acciones-post'>
                        <ul>
                            <li>
                                <span class='icon-heart'></span >
                                <label class='count-like-post'>212</label>
                            </li>
                            <li>
                                <span class='icon-share2'></span >
                                <label class='count-like-post'>45</label>
                            </li>
                        </ul>
                        <div class='content-coment-post'>
                            <div class='comentar-post'>
                                <input type='text' placeholder='Agregar un comentario'>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                </div>
                <div></div>
            </div>
            <div class = 'devsite-page-nav'></div>            
        </div>
    </div>
`;
}

deletePostElement = (img,title) => {
    return `<div></div>`;
}
EditPostElement = (img,title) => {
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