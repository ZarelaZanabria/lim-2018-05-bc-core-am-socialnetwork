//window.onload = inicializar;
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