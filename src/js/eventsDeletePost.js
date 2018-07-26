const eventsDeletePost = () => {
  $('.delete-post').click(() => {
    let dataDeletePost = $('.delete-post').attr('data-posts');
    let userId = firebase.auth().currentUser;
    let refDeletePost = firebase.database().ref('posts/' + dataDeletePost);
    let refDeletePostUser = firebase.database().ref('user-posts/'+userId.uid+'/'+ dataDeletePost);
    refDeletePost.remove();
    refDeletePostUser.remove();
    document.getElementById('div_delete_post').innerHTML = '';
  });
  document.getElementById("hide_form_search").addEventListener('click', function () {
    document.getElementById('div_delete_post').innerHTML = '';
  }, false);
}