$(function(){
        // preload audio
        var toast = new Audio('toast.wav');
    $('.code').on('click', function(e){
        e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
        $("#product").html($(this).data('product'));
        $("#code").html($(this).data('code'));
        $('#toast').toast({autohide: false}).toast('show');

    });

// on press of escape, hide toast
$(document).keyup(function(e){
    if(e.which == 27){
        $("#toast").toast('hide');
        }
    });  

//$("#product1").data('value', 'Cookies')

/* set discounted product name
$("#product").attr('data-value', 'Any Discounted Products');

// get and output discounted product
var discountedItem = $("#product").attr('data-value');
$("#product").html(discountedItem);  

// set discount code
$("#code").attr('data-value', '55689');

get and output discount code for product
var discountCode = $("#code").attr('data-value');
$("#code").html(discountCode); */

});

