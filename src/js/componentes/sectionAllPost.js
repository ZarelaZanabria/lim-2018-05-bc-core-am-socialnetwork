const sectionAllPost = (user, photo, coment, image, like,time, idpost) => {
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