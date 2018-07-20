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