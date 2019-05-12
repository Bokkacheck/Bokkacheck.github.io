var visinaFooter = parseInt($('footer').height());
var sirinaFuter = parseInt($('footer').width());
$('footer:nth-of-type(1)').css('clip', 'rect(0px,' + sirinaFuter / 2 + 'px,' + visinaFooter + 10 + 'px,0px)');
$('#footerPomoc').height(visinaFooter+20);

$('body>nav:nth-of-type(1)').removeClass('d-none');
var visinaNavigacije = $('nav:nth-of-type(1)').css('height');
$('body>nav:nth-of-type(1)').css('height', '0px');
$('body>nav:nth-of-type(1)').hide();
var animacijaNavigacija = true;
var footerAnimacija = true;
$(document).scroll("scroll", skrolovanje);
function skrolovanje() {
    var wScroll = $(window).scrollTop();
    $('#prlx1 .row:first-of-type').css('background-position', 'center ' + ((wScroll) * 0.4) + 'px')
    if ($(window).width() > 768) {
        if (wScroll > 400) {
            if (animacijaNavigacija) {
                $('body>nav:nth-of-type(1)').show();
                $('body>nav:nth-of-type(1)').animate({ height: visinaNavigacije }, 400);
                animacijaNavigacija = false;
            }
        }
        else {
            $('body>nav:nth-of-type(1)').css('height', '0px');
            $('body>nav:nth-of-type(1)').stop();
            $('body>nav:nth-of-type(1)').hide();
            animacijaNavigacija = true;
        }
    }
    if (proveraVrh(document.querySelector('footer:nth-of-type(1)'))&&footerAnimacija) {
        $('footer:nth-of-type(2)').animate({ left: '0%', opacity: 1 }, 1700, function () {
            $('footer').animate({ opacity: '1' }, { duration: 750, queue: false });
            $('footer:nth-of-type(2)').css('clip', 'rect(0px,' + 2*sirinaFuter + 'px,' + 2*visinaFooter + 'px,0px)');
            $('footer:nth-of-type(1)').addClass("d-none");
            $('#footerPomoc').addClass('d-none');
        })
        $('#footerPomoc').animate({left: '0%'}, 1700);
        $('footer:nth-of-type(1)').animate({ left: '0%', opacity: 1 }, 1700);
        footerAnimacija = false;
    }
}

function proveraVrh(elem) {
    return window.innerHeight - elem.getBoundingClientRect().top >= 50;
}