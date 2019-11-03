$(function() {
    $('#modal_show').click(function(){
      $('#modal').fadeIn();
    });

    $('#modal').click(function(){
      $(this).fadeOut();
    })
    //modal_contentクリックでfadeOut解除
    $('.modal_content').on('click',function(cancel){
      cancel.stopPropagation();
    });
  });
