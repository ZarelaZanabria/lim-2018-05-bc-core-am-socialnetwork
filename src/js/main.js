//window.onload = inicializar;
let newPost;
let newPostUser;

newPost = firebase.database().ref().child('posts');
newPostUser = firebase.database().ref().child('user-posts');

writeNewPost = (uidUser, username, picture, post, privacy) => {
    post = {
        uidUser: uidUser,
        author: username,
        content: post,
        image: picture,
        starCount: 0,
        privacy: privacy,
        time: '19:20',
    }
    let newPostKey = newPost.push().key;
    firebase.database().ref('posts/' + newPostKey).set(post);
    let newPostUserKey = newPost.push().key;
    firebase.database().ref('user-posts/' + newPostUserKey).set({ users: uidUser, post: newPostKey });

}
insertNewPost = (picture, post, privacy) => {
    let userId = firebase.auth().currentUser;
    writeNewPost(userId.uid, userId.displayName, picture, post, privacy);
    viewPost();
}
viewPost = () => {
    document.getElementById('items-post').innerHTML ='';
    let postRef = firebase.database().ref().child('posts');
    console.log(postRef);
    postRef.on('value', data => {
        let dataPosts = data.val();
        for (const post in dataPosts) {
            const user = dataPosts[post].uidUser;
            const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
            info.on('value', User => {
                let dataUser = User.val();
                document.getElementById('items-post').innerHTML += sectionAllPost(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, dataPosts[post].starCount, dataPosts[post].time);
            });
        };
    });
}
const deletePost = (uid) => {
    //Quiero coger aquel elemento que yo hiz click quiero borrar
    let postRef = firebase.database().ref().child('posts');
    let dataUserDelete = this.getAttribute("data-users");
    let refUsersDelete = postRef.child(dataUserDelete);
    refUsersDelete.remove();



}
const editPost = (post,privacy) => {
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