const postViews = (name, photo, post, image, like, time, uidPost) => {
    const count = (Object.keys(like ? like : {}).length);
    let myDate = new Date(Math.round((time) / 1000.0) * 1000);
    document.getElementById('items-post').innerHTML += sectionAllPost(name, photo, post, image, count, myDate.toLocaleString(), uidPost);    
  }