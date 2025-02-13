var allowedPages = ['home', 'profil', 'contact'];

$(document).ready(function(){
    var url = window.location.href;
    var lastSegment = url.substring(url.lastIndexOf('/') + 1);
    var geo = (lastSegment == '') ? 'home' : lastSegment;

    allowedPages.forEach(page => {
        if (page !== geo && $(".p-" + page).is(":empty")) { 
            $(".p-" + page).load("load/" + page + ".php", function() {
                console.log(page + " chargé");
            });
        }
    });
});


function setup(geo){
    $('.rightOpt').removeClass('on').addClass('off');
    $('.p-'+geo).removeClass('off').addClass('on');
}


$(document).on('click', '.home', function (e) {
    setup('home');
    e.preventDefault();
    history.pushState(null, "", window.location.pathname.split('/').slice(0, 2).join('/') + '/');
});

$(document).on('click', '.profil', function (e) {
    history.pushState(null, "", 'profil');
    setup('profil');
    e.preventDefault();
});

$(document).on('click', '.wall', function (e) {
    setup('wall');
    e.preventDefault();
    history.pushState(null, "", 'wall');
});

$(document).on('click', '.concours', function (e) {
    setup('concours');
    e.preventDefault();
    history.pushState(null, "", 'concours');
});

$(document).on('click', '.leaderboard', function (e) {
    setup('leaderboard');
    e.preventDefault();
    history.pushState(null, "", 'leaderboard');
});

$(document).on('click', '.arcade', function (e) {
    setup('arcade');
    e.preventDefault();
    history.pushState(null, "", 'arcade');
});

$(document).on('click', '.parametres', function (e) {
    setup('parametres');
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
