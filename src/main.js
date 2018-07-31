let user = null;
let postRef = firebase.database().ref().child('posts');
dataUserLogin = (uid) => {
  let photoOfDatabase;
  let displayName;
  let email;
  let datos;
  let userDatabase = firebase.database().ref('/Usuarios/' + uid);
  userDatabase.on('value', data => {
    datos = data.val();
    displayName = datos.usersName;
    email = datos.usersEmail;
    photoOfDatabase = datos.photoURL;
    user = { displayName: displayName, email: email, photoURL: photoOfDatabase };
  });

}
const insertNewPost = (picture, posts, privacy) => {
  let userId = firebase.auth().currentUser;
  let newPostKey = postRef.push().key;
  let postData = {
    uidUser: userId.uid,
    content: posts,
    image: picture,
    privacy: privacy,
    like: {},
    time: firebase.database.ServerValue.TIMESTAMP,
  }
  firebase.database().ref('posts/' + newPostKey).set(postData);
  firebase.database().ref('user-posts/' + userId.uid + '/' + newPostKey).set(postData);
}
const updateNewPost = (posts, privacy, uidPost) => {
  let userId = firebase.auth().currentUser;
  let postData = {
    content: posts,
    privacy: privacy,
    time: firebase.database.ServerValue.TIMESTAMP,
  }
  firebase.database().ref('/posts/' + uidPost).update(postData);
  firebase.database().ref('user-posts/' + userId.uid + '/' + uidPost).update(postData);
}

const deletePost = (dataDelete) => {
  let userId = firebase.auth().currentUser;
  let refDeletePost = firebase.database().ref('posts/' + dataDelete);
  let refDeletePostUser = firebase.database().ref('user-posts/' + userId.uid + '/' + dataDelete);
  refDeletePost.remove();
  refDeletePostUser.remove();
}
const Like = (idPost) => {
  let count = 0;
  let userId = firebase.auth().currentUser;
  let ObjectLikes = firebase.database().ref('/posts/' + idPost + '/like/');
  ObjectLikes.once('value', (data) => {
    let dataLike = data.val();
    for (const like in dataLike) {
      if (dataLike[like].create === userId.uid) {
        count++;
      }
    }
  });
  if (count !== 1) {
    updateLike(idPost);
  } else {
    deleteLike(idPost, userId.uid);
  }
}
const updateLike = (idPost) => {
  let userId = firebase.auth().currentUser;
  let postLikes = firebase.database().ref().child('posts/' + idPost + '/like');
  let starCountRef = firebase.database().ref('posts/' + idPost + '/like').push({
    creationTime: firebase.database.ServerValue.TIMESTAMP,// para mostrar dar formato actual
    create: userId.uid,
  })
}
const deleteLike = (idPost, uid) => {
  let refDeleteLike = firebase.database().ref('posts/' + idPost + '/like/');
  refDeleteLike.once('value', data => {
    const likes = data.val();
    for (const like in likes) {
      if (likes[like].create === uid) {
        let likePost = firebase.database().ref('posts/' + idPost + '/like/' + like);
        likePost.remove();
      }
    }
  });
}
const viewMyAccount = (uidUser) => {
  let userId = firebase.auth().currentUser;
  dataUserLogin(uidUser);// envio nuevos datos para obtener nuevos usuarios
  const dataPostUser = firebase.database().ref('/user-posts/' + uidUser);
  dataPostUser.once('value', data => {
    document.getElementById('items-post').innerHTML = '';
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const infoPost = firebase.database().ref('/posts/' + post).orderByChild('time');
      infoPost.once('value', posts => {
        const dataPost = posts.val();
        let typePublic= dataPost.privacy
        if (uidUser === userId.uid) {// si yo misma quiero ver mi verfil
         postViews(user.displayName, user.photoURL, dataPost.content, dataPost.image,  dataPost.like, dataPost.time, post);
        } else {
          if (typePublic === 'Público') {
          postViews(user.displayName, user.photoURL, dataPost.content, dataPost.image, dataPost.like, dataPost.time, post);          
          }
        }
      })
    }
    eventsPost();
  });
}
const viewPost = () => {
  postRef.off('value')
  postRef.on('value', data => {
    document.getElementById('items-post').innerHTML = '';
    let dataPosts = data.val();
    for (const post in dataPosts) {
      let typePublic=dataPosts[post].privacy;
      const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
      info.on('value', User => {
        let dataUser = User.val();
        if (typePublic === 'Público') {
        postViews(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, dataPosts[post].like, dataPosts[post].time, post);
        eventsPost();
      }
      });
    };
  });
}
window.searchUsers = (name) => {
  let info;
  const dataUser = firebase.database().ref('/Usuarios/').orderByChild('usersName').startAt(name).limitToFirst(10);
  return dataUser;
}
