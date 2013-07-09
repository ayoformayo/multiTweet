function onSuccess(){
  $('#tweetSubmit').attr('disabled', '');
    $('#tweetSubmit').css('display', 'block');
    $('img').css('display', 'none');
    $('input[name="tweetText"]').val(''); 
}

$(document).ready(function() {
  $(document).on('submit','#tweetSubmit',function(event){
    var tweet = $('input[name="tweetText"]');
    event.preventDefault();
    $('#tweetSubmit').attr('disabled', 'disabled');
    $('#tweetSubmit').css('display', 'none');
    $('img').css('display', 'block');
    $.post('/', tweet, onSuccess);
  });
});
