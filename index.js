// Your code goes here:

 let replaceImage = function(event) {
    jQuery('#main-image').attr('src', jQuery(this).attr('src'));
  }

jQuery('#thumbnails img').on('click', replaceImage)
