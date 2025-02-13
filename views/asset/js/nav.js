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

$(document).on('click', '.home', function (e) {
    e.preventDefault();
    history.pushState(null, "", window.location.pathname.split('/').slice(0, 2).join('/') + '/');
});


$(document).on('click', '.profil', function (e) {
    e.preventDefault();
    history.pushState(null, "", 'profil');
});

$(document).on('click', '.wall', function (e) {
    e.preventDefault();
    history.pushState(null, "", 'wall');
});

$(document).on('click', '.parametres', function (e) {
    e.preventDefault();
    history.pushState(null, "", 'parametres');
});

var langNewEtat;
$(document).on('click', '.lang', function (e) {
    e.preventDefault();
    if ($('.optLangue').css('display') !== 'none') {
        langNewEtat = 'none';
        
    } else {
        langNewEtat = 'block';
    }    
    lang(langNewEtat);
});

// $(document).ready(function() {
//     $('.lang').hover(
//         function() {
//             lang('block');
//         },
//         function() {
            // $('.right').on('mouseenter', function() {
            //     lang('none');
            //     console.log('ckhfbr');
            //     $(this).off('mouseenter');
            // });
//         }
//     );
// });



function lang(langNew){
    $('.optLangue').css('display', langNew);
}
