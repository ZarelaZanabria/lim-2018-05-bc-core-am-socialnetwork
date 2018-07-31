const eventsDeletePost = () => {
  $('.delete-post').click(() => {
    let dataDeletePost = $('.delete-post').attr('data-posts');
    deletePost(dataDeletePost); //elimina post en farebase    
    document.getElementById('div_new_post').innerHTML = '';
    $("#div_new_post").hide();
    
  });
  document.getElementById("hide_form_search").addEventListener('click', function () {
    document.getElementById('div_new_post').innerHTML = '';
    $("#div_new_post").hide();
  }, false);
}
