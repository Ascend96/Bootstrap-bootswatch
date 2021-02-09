$(function(){
    var animations = ["animate__animated animate__rubberBand", "animate__animated animate__bounce", 
    "animate__animated animate__pulse", "animate__animated animate__flash", 
    "animate__animated animate__heartBeat", "animate__animated animate__swing", 
    "animate__animated animate__wobble", "animate__animated animate__jello"];
    // randomize number for random array selection
    var randomNum = Math.floor(Math.random() * 8);
    console.log(randomNum);
    $("#header1").addClass(animations[randomNum]);
    $('#birthday').pickadate({ format: 'mmmm, d' });
        // uncheck all checkboxes (FireFox)
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });
        $("#checkAll").on("click", function(){

            if($(".form-check-input").is(':checked')){ // if checked, uncheck all
                $('.form-check-input').each(function () {
                    $(this).prop('checked', false);
                });
            } else{                          // if unchecked, check all
                $('.form-check-input').each(function () {
                    $(this).prop('checked', true);
                });
            }
            
    });
    // changes color of header based on hover of label
    $("#red").on("mouseenter", function(){
        $("#header1").css("color", "red");
    })
    $("#red").on("mouseleave", function(){
        $("#header1").css("color", "slategray");
    })

    $("#green").on("mouseenter", function(){
        $("#header1").css("color", "green");
    })
    $("#green").on("mouseleave", function(){
        $("#header1").css("color", "slategray");
    })
    $("#blue").on("mouseenter", function(){
        $("#header1").css("color", "blue");
    })
    $("#blue").on("mouseleave", function(){
        $("#header1").css("color", "slategray");
    })

            // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    // on submit, checks if any checkboxes are checked
    $("#submit").on('click', function(){
        if($(".form-check-input").is(':checked')){ // if checked, dont show toast
            $('#toast').toast({autohide: false}).toast('hide');
        } else{                                     // if unchecked, show toast
            $('#toast').toast({autohide: false}).toast('show');
        }
    })
    
    })
    