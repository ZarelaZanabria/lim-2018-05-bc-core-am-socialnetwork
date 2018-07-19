//window.onload = inicializar;
let CREATE='Publicar';
let UPDATE ='Modificar';
let modo=CREATE;
let postRef = firebase.database().ref().child('posts');
window.dataUserLogin = () => {
  let userId = firebase.auth().currentUser;
  console.log(userId.uid, userId.email);
  return { uid:userId.uid, displayName:userId.displayName,email:userId.email,photoURL:userId.photoURL }  
}
const insertNewPost = (picture, posts, privacy,uidPost) => {
  let userId=dataUserLogin();
  console.log(userId);
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +
    "  " + fecha.getHours() + ": " + fecha.getMinutes();
  let newPostKey = postRef.push().key;  
  switch (modo) {
    case CREATE:
    firebase.database().ref('posts/' + newPostKey).set({
      uidUser: userId.uid,
      author: userId.displayName,
      content: posts,
      image: picture,
      starCount: 0,
      privacy: privacy,
      time: dateNew,
    });

    let newPostUserKey = firebase.database().ref().child('user-posts').push().key;
    firebase.database().ref('user-posts/' + newPostUserKey).set({
      users: userId.uid,
      post: newPostKey,
    });      
      break;
    case UPDATE:
    firebase.database().ref('/posts/' + uidPost).update({
      uidUser: userId.uid,
      author: userId.displayName,
      content: posts,
      image: picture,
      starCount: 0,
      privacy: privacy,
      time: dateNew,
    });
      break;  
    default:
      break;
  }
  


}
const viewPost = () => {
  //document.getElementById('items-post').innerHTML = '';
  postRef.on('value', data => {
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const user = dataPosts[post].uidUser;
      const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
      info.on('value', User => {
        let dataUser = User.val();
        document.getElementById('items-post').innerHTML +=sectionAllPost(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, dataPosts[post].starCount, dataPosts[post].time, post);
        eventsPost();
      });
    };
  });
}


/* const editPost = (post, privacy) => {
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

} */