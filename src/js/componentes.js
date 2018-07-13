headerElement = (userLogin,photo) =>{
    return `
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
                    <li class='icon-home2'>  Inicio </li>
                    <li class='icon-question'></li>
                    <li class='icon-config'>
                        <button type="button" id="btnLogOut" value="Salir">Cerrar Sesion</button>
                    </li>
                    <span class="icon-switch"></span>
                </ul>
            </nav>
        </div>
    </div>`
}
sectionElement = () => {
    return `
    <div class = 'devsite-main-content'>
        <div class = 'devsite-banner-content'>
            <div class = 'devsite-newpost-content'></div>
            <div class = 'devsite-section-nav'></div>
            <div class = 'devsite-post'></div>
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
    return `<div id="section-register-user" class="content-login">
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
    </div>`
}
loginElement = () => {
    return `<div id="section-login" class="content-login">
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
    </div>`
}