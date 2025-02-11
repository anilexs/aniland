$(document).ready(function(){
    $('.langOpt').on('click', function (e) {
        var ISO  = $(this).find('img').attr('alt');
        var img = $(this).find('img').attr('src');
        var langue = $(this).find('.langTxt').text(); 

        $('.imgSelect').attr('src', img)
        $('.langTxtDefaux').text(langue)

        document.cookie = 'lang=' + ISO + '; path=/; max-age=31536000';
        location.reload();
    });    
});