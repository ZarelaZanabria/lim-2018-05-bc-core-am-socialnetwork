const eventsDeletePost = () => {
  $('.delete-post').click(() => {
    let dataDeletePost = $('.delete-post').attr('data-posts');
    let refDelete = firebase.database().ref('posts/' + dataDeletePost);
    refDelete.remove();
    document.getElementById('div_delete_post').innerHTML = '';
  });

  document.getElementById("hide_form_search").addEventListener('click', function () {
    document.getElementById('div_delete_post').innerHTML = '';
  }, false);
}