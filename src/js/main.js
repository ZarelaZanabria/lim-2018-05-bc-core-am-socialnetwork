//window.onload = inicializar;
let CREATE = 'Publicar';
let UPDATE = 'Modificar';
let modo = CREATE;
let postRef = firebase.database().ref().child('posts');
window.dataUserLogin = () => {
  let userId = firebase.auth().currentUser;
  return { uid: userId.uid, displayName: userId.displayName, email: userId.email, photoURL: userId.photoURL }
}
const updateNewPost = (posts, privacy, uidPost) => {
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +
    "  " + fecha.getHours() + ": " + fecha.getMinutes();
  firebase.database().ref('/posts/' + uidPost).update({
    content: posts,
    privacy: privacy,
    time: dateNew,
  });
}
const insertNewPost = (picture, posts, privacy) => {
  let userId = dataUserLogin();
  console.log(userId);
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +
    "  " + fecha.getHours() + ": " + fecha.getMinutes();
  let newPostKey = postRef.push().key;
  firebase.database().ref('posts/' + newPostKey).set({
    uidUser: userId.uid,
    author: userId.displayName,
    content: posts,
    image: picture,
    privacy: privacy,
    time: dateNew,
  });
  let newPostUserKey = firebase.database().ref().child('user-posts').push().key;
  firebase.database().ref('user-posts/' + newPostUserKey).set({
    users: userId.uid,
    post: newPostKey,
  });
  updateLike(newPostKey);
}
const updateLike = (idPost) => {
  let userId = dataUserLogin();
  let postLikes = firebase.database().ref().child('posts/' + idPost + '/like');
  let newPostKeyLike = postLikes.push().key;
  let starCountRef = firebase.database().ref('posts/' + idPost + '/like').push({
    creationTime: firebase.database.ServerValue.TIMESTAMP,// para mostrar dar formato actual
    create: userId.uid,
  })
}
const Like=(idPost)=>{
  let userId = dataUserLogin();
  let ObjectLikes = firebase.database().ref('/posts/' + idPost + '/like/');
  ObjectLikes.on('child_added', (data)=>{// recupera todos los datos
    let dataLike=data.val();
    if(dataLike.create==userId.uid){
      alert('YA DISTE UN !!');
    }else{
      updateLike(idPost);
    }
  });  
}
const viewPost = () => {
  postRef.on('value', data => {
    document.getElementById('items-post').innerHTML = '';
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const likePos = dataPosts[post].like;
      console.log('like', likePos)
      const count = (Object.keys(likePos).length)-1;
      const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
      info.once('value', User => {
        let dataUser = User.val();
        document.getElementById('items-post').innerHTML += sectionAllPost(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, count, dataPosts[post].time, post);
        eventsPost();
      });
    };
  });
}
/*
  let userId = dataUserLogin();
  let postLikes = firebase.database().ref().child('posts/' + idPost + '/like');
  postLikes.on('value', data => {
    let postLikes = data.val();
    if (postLikes == null) {
      let newPostKeyLike = postLikes.push().key;
      var starCountRef = firebase.database().ref('posts/' + idPost + '/likes').push({
        creationTime: firebase.database.ServerValue.TIMESTAMP,// para mostrar dar formato actual
        create: userId.uid,
      });
    } else {
      console.log(postLikes);
      for (const like in postLikes) {
        const uidLike = postLikes[like].uid;
        if (postLikes[like].create != userId.uid) {
          let newPostKeyLike = postLikes.push().key;
          var starCountRef = firebase.database().ref('posts/' + idPost + '/likes').push({
            creationTime: firebase.database.ServerValue.TIMESTAMP,// para mostrar dar formato actual
            create: userId.uid,
          });
        } else {
          alert('gpolswhd')
          let refDelete = firebase.database().ref('posts/' + idPost + '/like' + uidLike);
          refDelete.remove();
        }
      }
    }

  })
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

} */