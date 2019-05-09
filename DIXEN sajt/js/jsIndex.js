var visinaFooter = parseInt($('footer').height()+20);
var sirinaFuter = parseInt($('footer').width());
$('footer:nth-of-type(2)').css('clip', 'rect(0px,' + sirinaFuter+100 + 'px,' + visinaFooter + 'px,' + sirinaFuter / 2 + 'px)');
$('footer:nth-of-type(1)').css('clip', 'rect(0px,' + sirinaFuter / 2 + 'px,' + visinaFooter+ 10 + 'px,0px)');

$('nav:nth-of-type(1)').removeClass('d-none');
var visinaNavigacije = $('nav:nth-of-type(1)').css('height');
$('nav:nth-of-type(1)').css('height', '0px');
$('nav:nth-of-type(1)').hide();
$(document).ready(pocetak);
function pocetak() {
    //PRORACUN SLAJDER
    proracunSlider();
    $(window).resize(proracunSlider);
    //SLAJDER 
    var desno = true;
    $('#desno').click(function () {
        if (desno) {
            $('.slides').css('left', -$('.slide').width() + 'px');
            $('.slides .slide:last-of-type').prependTo($('.slides'));
            $('.slides').animate({ left: 0 + "px" }, 500, function () { desno = true });
            desno = false;
        }
    })
    var levo = true;
    $('#levo').click(function () {
        if (levo) {
            $('.slides').animate({ left: -$('.slide').width() + "px" }, 500, postaviNulu);
            levo = false;
        }
    })
    function postaviNulu() {
        levo = true;
        $('.slides').css('left', '0px');
        $('.slides .slide:first-of-type').appendTo($('.slides'));
    }
    //SLAJDER VIDEO ODABIR
    $('#prviSlider').click(function () { slajderVideo(0) });
    $('#drugiSlider').click(function () { slajderVideo(1) });
    $('#treciSlider').click(function () { slajderVideo(2) });
    //ANIMACIJA PRVA-POCETNI
    $('#prozor').animate({ 'background-position-y': '0' }, 1200);
    $('#prozor h1').animate({ left: '0' }, 1400);
    $('#prozor p').animate({ left: '0' }, 1700);
}
function slajderVideo(mod) {        //treba zameniti, mora krace
    for (var i = 0; i < 3; i++) {
        $('#labelaSlider div').get(i).style.left = '0%';
        $('#labelaSlider div').get(i).style.width = '100%';
        $('#labelaSlider div').get(i).style.opacity = '0.50';
    }
    switch (mod) {
        case 0:
            $('#prviSlider').css('left', '-10%');
            $('#prviSlider').css('width', '110%');
            $('#prviSlider').css('opacity', '0.8');
            break;
        case 1:
            $('#drugiSlider').css('left', '-10%');
            $('#drugiSlider').css('width', '110%');
            $('#drugiSlider').css('opacity', '0.8');
            break;
        case 2:
            $('#treciSlider').css('left', '-10%');
            $('#treciSlider').css('width', '110%');
            $('#treciSlider').css('opacity', '0.8');
            break;
    }
    $("#videoCarousel").carousel(mod);
    document.getElementById("video" + mod).play();
}
//Slajder popularni proizvodi
function proracunSlider() {
    if ($(window).width() < 576) {
        $('#prlx1').removeClass('p-5');
        $('i').addClass('fa-1x');
        $('i').removeClass('fa-2x');
        $('i').removeClass('fa-3x');
        $('.slides').width($('.slider').width() * 6);
    }
    else if ($(window).width() > 576 && $(window).width() < 992) {
        $('.slides').width($('.slider').width() * 3);
        $('i').addClass('fa-2x');
        $('i').removeClass('fa-1x');
        $('i').removeClass('fa-3x');
    }
    else if ($(window).width() >= 992) {
        $('i').addClass('fa-3x');
        $('i').removeClass('fa-1x');
        $('i').removeClass('fa-2x');
        $('.slides').width($('.slider').width() * 1.5);
    }
    //i za najprodavanije proizvode peding
    if($(window).width()<992)
    $('#prlx1 .row:first-of-type').removeClass('pl-5 pr-5');
}

(function () {      //Za slike pocetne
    var brojac = 0;
    setInterval(promena, 3000);
    function promena() {
        if (brojac == 4) brojac = 0;
        var promena = "center";
        if (brojac % 4 == 0) {
            $('#prozor').css('background-image', 'url("images/RED_HEAD_FINAL.jpg")')
        }
        else if (brojac % 4 == 1) {
            promena = "left"
            $('#prozor').css('background-image', 'url("images/Rebels_12.jpg")')
        }
        else if (brojac % 4 == 2) {
            $('#prozor').css('background-image', 'url("images/INFINITI_bRED.jpg")')
        }
        else {
            $('#prozor').css('background-image', 'url("images/Rockstar_Girl.jpg")')
        }
        $('#prozor').css('background-position-x', promena + " ");
        brojac++;
    }
})()

//Skrolovanje
var korisnici = true;
var desnolevo = true;
var levodesno = true;
var animacijaNavigacija = true;
var labelaSliderAnimacija = true;
$(document).scroll("scroll", skrolovanje);
function skrolovanje() {
    var wScroll = $(window).scrollTop();
    $('#prlx2').css('background-position', 'center ' + ((wScroll) * 0.3) + 'px');
    $('#prlx1').css('background-position', 'center ' + ((wScroll) * 0.6) + 'px');
    $('#prozor').css('background-position', 'center ' + ((wScroll) * 0.01) + 'px');
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
    if (proveraVrh(document.querySelector('#prvi')) && korisnici) {
        $('#prlx2 .card').css('visibility', 'visible');
        $('#prlx2 .card').animate({ width: '100%', height: '100%', opacity: '1' }, 2000);
        korisnici = false;
    }
    if (proveraVrh(document.querySelector('#prlx1 .row:first-of-type')) && desnolevo) {
        $('#prlx1 .row:first-of-type').animate({ width: '100%', left: '0%' }, 1500);
        $('#prlx1 h2:first-of-type').animate({ left: '0' }, 1700);
        desnolevo = false;
    }
    if (proveraVrh(document.querySelector('#prlx1 .row:nth-of-type(2)')) && levodesno) {
        $('#prlx1 .row:nth-of-type(2)').animate({ left: '0%' }, 1500);
        $('#prlx1 h2:nth-of-type(2)').animate({ left: '0' }, 1700);
        levodesno = false;
    }
    if (proveraVrh(document.querySelector('#redSlider')) && labelaSliderAnimacija) {
        $('#redSlider').animate({ left: '15px', width: "100%", height: '100%' }, 1500, function () {
            $('#labelaSlider div:nth-of-type(1)').animate({ left: '0' }, 2200, function () {
                slajderVideo(0);
            });
            $('#labelaSlider div:nth-of-type(2)').animate({ left: '0' }, 2600);
            $('#labelaSlider div:nth-of-type(3)').animate({ left: '0' }, 3000);
        });
        labelaSliderAnimacija = false;
    }
    if (proveraVrh(document.querySelector('footer:nth-of-type(1)'))) {
        $('footer:nth-of-type(1)').animate({ left: '0px', opacity: 1 }, 1500, function () {
            $('footer').animate({ opacity: '1' }, { duration: 500, queue: false });
            $('footer:nth-of-type(1)').css('clip', 'rect(0px,' + 2*sirinaFuter + 'px,' + 2*visinaFooter + 'px,0px)');
            $('footer:nth-of-type(2)').addClass("d-none");
        })
        $('footer:nth-of-type(2)').animate({ left: '0%', opacity: 1 }, 1500);
    }
}
function proveraVrh(elem) {
    return window.innerHeight - elem.getBoundingClientRect().top >= 50;
}