//window.onload = inicializar;

let postRef = firebase.database().ref().child('posts');
window.dataUserLogin = () => {
  let userId = firebase.auth().currentUser;
  return { uid: userId.uid, displayName: userId.displayName, email: userId.email, photoURL: userId.photoURL }
}
const updateNewPost = (posts, privacy, uidPost) => {
  let userId = dataUserLogin();
  let fecha = new Date();
let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +"  " + fecha.getHours() + ": " + fecha.getMinutes();
  
  let postData = {
    content: posts,
    privacy: privacy,
    time: dateNew,
  }
 firebase.database().ref('/posts/' + uidPost).update(postData);
 firebase.database().ref('user-posts/' + userId.uid +'/'+uidPost).update(postData);
}
const insertNewPost = (picture, posts, privacy) => {
  console.log(new Date());
  let userId = dataUserLogin();
  let fecha = new Date();
  let dateNew = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +"  " + fecha.getHours() + ": " + fecha.getMinutes();
  let newPostKey = postRef.push().key;
  let postData = {
    uidUser: userId.uid,
    content: posts,
    image: picture,
    privacy: privacy,
    time: dateNew,
  }
  firebase.database().ref('posts/' + newPostKey).set(postData);
  firebase.database().ref('user-posts/' + userId.uid+'/'+newPostKey).set(postData);
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
const viewPost = () => {
  let userId = dataUserLogin();
  postRef.on('value', data => {
    console.log(postRef);
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
