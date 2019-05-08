var visinaFooter = parseInt($('footer').height()+100);
var sirinaFuter = parseInt($('footer').width());
$('footer:nth-of-type(2)').css('clip', 'rect(0px,' + sirinaFuter + 10 + 'px,' + visinaFooter + 'px,' + sirinaFuter / 2 + 'px)');
$('footer:nth-of-type(1)').css('clip', 'rect(0px,' + sirinaFuter / 2 + 'px,' + visinaFooter + 'px,0px)');
$('nav:nth-of-type(1)').removeClass('d-none');
var visinaNavigacije = $('nav:nth-of-type(1)').css('height');
$('nav:nth-of-type(1)').css('height', '0px');
$('nav:nth-of-type(1)').hide();
var animacijaNavigacija = true;
$(document).scroll("scroll", skrolovanje);
function skrolovanje() {
    var wScroll = $(window).scrollTop();
    $('#prlx1 .row:first-of-type').css('background-position', 'center ' + ((wScroll) * 0.4) + 'px')
    if ($(window).width() > 768) {
        if (wScroll > 400) {
            if (animacijaNavigacija) {
                $('nav:nth-of-type(1)').show();
                $('nav:nth-of-type(1)').animate({ height: visinaNavigacije }, 400);
                animacijaNavigacija = false;
            }
        }
        else {
            $('nav:nth-of-type(1)').css('height', '0px');
            $('nav:nth-of-type(1)').stop();
            $('nav:nth-of-type(1)').hide();
            animacijaNavigacija = true;
        }
    }
    if (proveraVrh(document.querySelector('footer:nth-of-type(1)'))) {
        $('footer:nth-of-type(1)').animate({ left: '0%', opacity: 1 }, 1500, function () {
            $('footer').animate({ opacity: '1' }, { duration: 500, queue: false });
            $('footer:nth-of-type(1)').css('clip', 'rect(0px,' + sirinaFuter + 'px,' + visinaFooter + 'px,0px)')
        })
        $('footer:nth-of-type(2)').animate({ left: '0%', opacity: 1 }, 1500);
    }
}

function proveraVrh(elem) {
    return window.innerHeight - elem.getBoundingClientRect().top >= 50;
}