//window.onload = inicializar;

let postRef = firebase.database().ref().child('posts');
window.dataUserLogin = () => {
  let userId = firebase.auth().currentUser;
  return { uid: userId.uid, displayName: userId.displayName, email: userId.email, photoURL: userId.photoURL }
}
const updateNewPost = (posts, privacy, uidPost) => {
  let userId = dataUserLogin();
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + "  " + fecha.getHours() + ": " + fecha.getMinutes();

  let postData = {
    content: posts,
    privacy: privacy,
    time: dateNew,
  }
  firebase.database().ref('/posts/' + uidPost).update(postData);
  firebase.database().ref('user-posts/' + userId.uid + '/' + uidPost).update(postData);
}
const insertNewPost = (picture, posts, privacy) => {
  console.log(new Date());
  let userId = dataUserLogin();
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + "  " + fecha.getHours() + ": " + fecha.getMinutes();
  let newPostKey = postRef.push().key;
  let postData = {
    uidUser: userId.uid,
    content: posts,
    image: picture,
    privacy: privacy,
    time: dateNew,
  }
  firebase.database().ref('posts/' + newPostKey).set(postData);
  firebase.database().ref('user-posts/' + userId.uid + '/' + newPostKey).set(postData);
  updateLike(newPostKey);
}
const updateLike = (idPost) => {
  let userId = dataUserLogin();
  let postLikes = firebase.database().ref().child('posts/' + idPost + '/like');
  let starCountRef = firebase.database().ref('posts/' + idPost + '/like').push({
    creationTime: firebase.database.ServerValue.TIMESTAMP,// para mostrar dar formato actual
    create: userId.uid,
  })
}
const Like = (idPost) => {
  let userId = dataUserLogin();
  let ObjectLikes = firebase.database().ref('/posts/' + idPost + '/like/');
  ObjectLikes.once('value', (data) => {// recupera todos los datos
    let dataLike = data.val();
    for (const like in dataLike) {
      if (dataLike[like].create === userId.uid) {
        let refDelete = firebase.database().ref('posts/' + idPost + '/like');
        //refDelete.remove();
        alert('YA DISTE UN !!');
      }
      else {
        updateLike(idPost);
      }
    }
  });
}
const viewMyAccount = () => {
  let userId = dataUserLogin();
  const dataPostUser = firebase.database().ref('/user-posts/' + userId.uid);
  dataPostUser.on('value', data => {
    console.log('perfil'+new Date());
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const infoPost = firebase.database().ref('/posts/'+post);
      infoPost.once('value', posts => {
        let dataPost = posts.val();
        const likePos = dataPost.like;
        const count = (Object.keys(likePos).length) - 1;        
         document.getElementById('items-post').innerHTML += sectionAllPost(userId.displayName, userId.photoURL, dataPost.content, dataPost.image, count, dataPost.time, post);
         
      })
    }
    eventsPost();
  }); 
  
}
const viewPost = () => {
  let userId = dataUserLogin();
  postRef.on('value', data => {
    console.log('recarga todos los spost '+new Date());
    document.getElementById('items-post').innerHTML = '';
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const likePos = dataPosts[post].like;
      const count = (Object.keys(likePos).length) - 1;
      const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
      info.once('value', User => {
        let dataUser = User.val();
        document.getElementById('items-post').innerHTML += sectionAllPost(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, count, dataPosts[post].time, post);
         eventsPost();
      });
    };    
     
  });
     
 }
 const searchUsers=(name)=>{
  const dataUser=firebase.database().ref('/Usuarios/');
  dataUser.orderByChild("usersName").startAt(name).on("child_added", 
    function(snapshot) {
      console.log(snapshot.usersEmail);
  /*  const listUsers=dataUser;   
   listUsers.on('value',data=>{
    let user=data.val();
    console.log(user );
    
    }); */
   //name=data.val().usersName;
   //photo=data.val().photoURL;
   });
   //return {nameUser:name, photoUser:photo};
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