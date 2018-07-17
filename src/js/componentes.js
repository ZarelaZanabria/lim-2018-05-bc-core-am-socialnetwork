    headerElement = (userLogin,photo) =>{
    return $('#header-main').append(`
    <div class='header-main-content'>

        <div class='header-section'>
            <div class=search>
                <input type='text' class='search-input'>
                <span class='icon-search'></span>
            </div>
        </div>
        <div class='header-section-user'>
            <nav>
                <ul>
                    <li>
                        <button type="button" id="btnLogOut" value="Salir">Cerrar Sesion</button>
                    </li>
                    <li>
                        <div id="welcomeProfile"> ${userLogin}</div>
                    </li>
                    
                    <li >
                        <img src='${photo}' alt='photo-profile'>                                                
                    </li>
                    
                </ul>
            </nav>
        </div>
    </div>`);
}
sectionElement = () => {
    return `
    <div class = 'devsite-main-content' id='devsite-main-content'>
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
                    <ol class='items-post' id='items-post' ></ol>                    
                </div>
            </div>
            <div class = 'devsite-page-nav'></div>            
        </div>
    </div>
`;
}
sectionAllPost = (user,photo, coment, image,likes,time) =>{
    return `
    <li class='content-allPost'>
        <div class='stream-item-header-allPost'>
            <img class='photo-profile-user-post' src='${photo}' alt='photo'>    
            <div class='profile-user-post'>               
                <span class='full-name-user'>
                    <strong> ${user}</strong>
                </span>            
                <small class='time'>
                    <span class='time-post-regresivo'>${time}</span>
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
        </div>
        <div class='post-text-container'>
            <p>${coment}</p>    
        </div>
        <div class='post-container'>
            <img src='${image}' alt='img'>
        </div>
        <div class='stream-item-footer'>
            <div class='acciones-post'>
            <div class='acction'>
                <div class='icon-likes-post'>
                    <span class='icon-heart'></span >
                    <label class='count-like-post'>${likes}</label>
                </div>
                <div class='icon-likes-post'>
                    <span class='icon-share2'></span >
                    <label class='count-like-post'>${likes}</label>
                </div>
            </div>
            <div class='content-coment-post'>
                <div class='comentar-post'>
                    <input type='text' placeholder='Agregar un comentario'>
                </div>
            </div>
            </div>

        </div>            
    </li>`;
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