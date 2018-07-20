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