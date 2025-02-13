var allowedPages = ['home', 'profil', 'contact'];

$(document).ready(function(){
    var url = window.location.href;
    var lastSegment = url.substring(url.lastIndexOf('/') + 1);
    var geo = (lastSegment == '') ? 'home' : lastSegment;

    allowedPages.forEach(page => {
        if (page !== geo && $(".p-" + page).is(":empty")) { 
            $(".p-" + page).load("load/" + page + ".php");
        }
    });
});


function setup(geo){
    $('.rightOpt').removeClass('on').addClass('off');
    $('.p-'+geo).removeClass('off').addClass('on');
}


$(document).on('click', '.home', function (e) {
    if ($('.p-home').hasClass('off')) {
        setup('home');
        e.preventDefault();
        history.pushState(null, "", window.location.pathname.split('/').slice(0, 2).join('/') + '/');
        console.log("on");
    }
    
});

$(document).on('click', '.profil', function (e) {
    if ($('.p-profil').hasClass('off')) {
        history.pushState(null, "", 'profil');
        setup('profil');
        e.preventDefault();
    }
});

$(document).on('click', '.wall', function (e) {
    if ($('.p-wall').hasClass('off')) {
        setup('wall');
        e.preventDefault();
        history.pushState(null, "", 'wall');
    }
});

$(document).on('click', '.concours', function (e) {
    if ($('.p-concours').hasClass('off')) {
        setup('concours');
        e.preventDefault();
        history.pushState(null, "", 'concours');
    }
});

$(document).on('click', '.leaderboard', function (e) {
    if ($('.p-leaderboard').hasClass('off')) {
        setup('leaderboard');
        e.preventDefault();
        history.pushState(null, "", 'leaderboard');
    }
});

$(document).on('click', '.arcade', function (e) {
    if ($('.p-arcade').hasClass('off')) {
        setup('arcade');
        e.preventDefault();
        history.pushState(null, "", 'arcade');
    }
});

$(document).on('click', '.parametres', function (e) {
    if ($('.p-parametres').hasClass('off')) {
        setup('parametres');
        e.preventDefault();
        history.pushState(null, "", 'parametres');
    }
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
