// Your code goes here:

 let replaceImage = function(event) {
    $('#main-image').attr('src', $(this).attr('src'));
  }

$('#thumbnails img').on('click', replaceImage)
