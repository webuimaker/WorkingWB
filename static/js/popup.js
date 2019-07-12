$(document).ready(() => {
    $('.open-popup').click(() => {
        $('.popup').addClass('active');
    });
    $('.close-popup').click(() => {
        $('.popup').removeClass('active');
    });
    
    $("#submit").click(() => {
        if (($('#name').val().length <= 0) || ($('#name').val() == "Naam")) {
            $('.err-msg').addClass('active')
        } 
    })
})