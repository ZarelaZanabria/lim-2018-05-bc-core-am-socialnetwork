//window.onload = inicializar;
let newPost;
let newPostUser;
newPost = firebase.database().ref().child('posts');
newPostUser = firebase.database().ref().child('user-posts');
window.dataUserLogin = () => {
  let userId = firebase.auth().currentUser;
  return { uid:userId.uid, displayName:userId.displayName,email:userId.email,photoURL:userId.photoURL }
}
writeNewPost = (uidUser, username, picture, post, privacy) => {
  
}
const insertNewPost = (picture, post, privacy) => {
  const userId=dataUserLogin();
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +
    "  " + fecha.getHours() + ": " + fecha.getMinutes();
  post = {
    uidUser: userId.uid,
    author: userId.displayName,
    content: post,
    image: picture,
    starCount: 0,
    privacy: privacy,
    time: dateNew,
  }
  let newPostKey = newPost.push().key;
  firebase.database().ref('posts/' + newPostKey).set(post);
  let newPostUserKey = newPostUser.push().key;
  firebase.database().ref('user-posts/' + newPostUserKey).set({ users: uidUser, post: newPostKey });
  $('.edit-eliminar').show();
  document.getElementById('edit-eliminar').value = post;

}
const viewPost = () => {
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
const deletePost = (uidPost) => {
  //Quiero coger aquel elemento que yo hiz click quiero borrar
  let userId = firebase.auth().currentUser;// quien inicio secion
  console.log(userId);
  let refUsersDelete = firebase.database().ref('posts/' + uidPost);
  refUsersDelete.on('value', data => {
    let dataPosts = data.val();
    if (userId.uid === dataPosts.uidUser) {
      refUsersDelete.remove();
    } else {
      alert('Solo puedes eliminar tu post :D');
      console.log(userId);
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