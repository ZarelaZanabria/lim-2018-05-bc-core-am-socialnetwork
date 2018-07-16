//window.onload = inicializar;

const writeNewPost = (uidUser, username, picture, post, privacy) => {
    firebase.database().ref('posts/').set({
        uidUser:uidUser,
        author: username,        
        content: post,
        image: picture,
        starCount: 0,
        privacy: privacy,
        time: time,
             
    });
} 
const writeNewPostUsers =(uidpost)=>{
    var userId = firebase.auth().currentUser.uid;
    refPost =firebase.database.ref().child('posts');// obtengo el objeto de post
    firebase.database().ref('user-posts/').set({
        
        posts: refPost.uid,
        users:  userId.uid,             
    });
} 
insertNewPost = (post,picture,privacy)=>{
    // recupero los datos de un usuario
    var userId = firebase.auth().currentUser.uid;// el usuario actual logueado
    writeNewPost(userId.uid,userId.displayname,picture,post,privacy);// insertando bd
    //writeNewPostUsers();
}
/*
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
*/
const deletePost = (uid)=>{

}
const editPost = () => {

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

}
// actualizaciones