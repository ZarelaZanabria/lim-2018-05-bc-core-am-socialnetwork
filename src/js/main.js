//window.onload = inicializar;
<<<<<<< HEAD
const writeNewPost = (uid, username, picture, title, privacy,fecha) => {
    var postData = {
        author: username,
        uid: uid,
        title: title,
        starCount: 0,
        privacy: privacy,
        image: picture,
    };
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
}
const deletePost = (uid)=>{

}
const editPost = () => {

=======
let newPost;
let newPostUser;

newPost = firebase.database().ref().child('posts');
newPostUser = firebase.database().ref().child('user-posts');

writeNewPost = (uidUser, username, picture, post, privacy) => {
    let fecha = new Date();
    let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +
        "  " + fecha.getHours() + ": " + fecha.getMinutes();

    post = {
        uidUser: uidUser,
        author: username,
        content: post,
        image: picture,
        starCount: 0,
        privacy: privacy,
        time: dateNew,
    }
    let newPostKey = newPost.push().key;
    firebase.database().ref('posts/' + newPostKey).set(post);
    let newPostUserKey = newPost.push().key;
    firebase.database().ref('user-posts/' + newPostUserKey).set({ users: uidUser, post: newPostKey });

    $('.edit-eliminar').show();
    document.getElementById('edit-eliminar').value = post;

}
insertNewPost = (picture, post, privacy) => {
    console.log(picture, post, privacy);
    let userId = firebase.auth().currentUser;
    writeNewPost(userId.uid, userId.displayName, picture, post, privacy);

}
viewPost = () => {
    //document.getElementById('items-post').innerHTML = '';
    let postRef = firebase.database().ref().child('posts');
    postRef.on('value', data => {
        let dataPosts = data.val();
        for (const post in dataPosts) {
            const idpost = post;
            const user = dataPosts[post].uidUser;
            const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
            info.on('value', User => {
                let dataUser = User.val();
                document.getElementById('items-post').innerHTML += sectionAllPost(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, dataPosts[post].starCount, dataPosts[post].time, idpost);

            });
        };
    });
}
deletePost = (uidPost) => {
    //Quiero coger aquel elemento que yo hiz click quiero borrar
    let userId = firebase.auth().currentUser;// quien inicio secion
    let refUsersDelete = firebase.database().ref('posts/' + uidPost);
    refUsersDelete.on('value', data => {
        let dataPosts = data.val();
        console.log();
        if (userId.uid === dataPosts.uidUser) {
            refUsersDelete.remove();
        } else {
            
            alert('Solo puedes eliminar tu post :D' );
        }
    });

}
const editPost = (post, privacy) => {
    function writeNewPost(uid, username, picture, title, body) {
        // A post entry.
        var postData = {
            author: username,
            uid: uid,
            body: body,
            title: title,
            starCount: 0,
            authorPic: picture
        };
        var newPostKey = firebase.database().ref().child('posts').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
}
const likesCount = () => {

}
const allPost = () => {

}
const listNewPost = () => {

}
const addCommnent = () => {

}
const deleteComment = () => {

<<<<<<< HEAD
}
// actualizaciones
=======
}
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
