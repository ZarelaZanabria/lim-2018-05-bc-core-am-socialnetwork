headerElement = (userLogin, photo) => {
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
                        <div id="welcomeProfile">${userLogin}</div>
                    </li>                    
                    <li>
                        <img src='${photo}' alt='photo-profile' id="btnLogOut">                                                
                    </li>
                    
                </ul>
            </nav>
        </div>
    </div>`);
}