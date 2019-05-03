function pocetak()      //samo za index
{
    navigacija();
    vrati();
    window.addEventListener("scroll",provera);
}

//SLOVO PO SLOVO

function navigacija()
{
    var ime = document.getElementById('ispis');
    var timer = setInterval(mojeime,200);
    var bojan = "Bojan Stojković"
    var i = 0;
    function mojeime()
    {
        if(i==20)
        {
            ime.innerHTML=""
            ime.style.color='#c72323';
            i=-1;

        }
        else if(i<15)
        {
            ime.innerHTML+=bojan[i];
            ime.style.color='white';
        }
        else{
            ime.style.color='#c72323';
        }
        i++;
    }
}

//KONTAKTIRAJ ME

function kontaktiraj()
{
    promena.innerHTML = '<a href="kontakt.html" onmouseover="kontaktiraj_hover()">Kontaktirajte me !</a>';
    promena.style.color='lightslategray';
    var pauza = setTimeout(vrati,3500)
}
function vrati()
{
    promena = document.getElementById("kontaktiraj");
    promena.style.color='white';
    promena.innerHTML = 'Imate poslovni predlog ?';
    var pauza = setTimeout(kontaktiraj,3500);
}
function kontaktiraj_hover()
{
    promena.style.color='black';
}

//METER

function provera()
{
    var element = document.getElementById('jedan').getBoundingClientRect();
    var visina = element.top;
    if(window.innerHeight - visina >= 75)
    {
        startuj(); 
        window.removeEventListener("scroll",provera); 
    }

}
function startuj()
{
    var i = 0;
    var j = 0;
    var k = 0;
    var prvi = document.getElementById('jedan');
    var drugi = document.getElementById('dva');
    var treci = document.getElementById('tri');
    var timer = setInterval(popuni,50)
    function popuni()
    {
        i+=2;
        j+=1;
        if(i<67)
        {
            prvi.style.width = i+'%';
            prvi.innerHTML=i+'%';
        }
        if(j<43)
        {
            drugi.style.width = j+'%';
            drugi.innerHTML = j+'%';
        }
        if(i<89)
        {
            treci.style.width = i+'%';
            treci.innerHTML = i+'%'
        }
        if(i==89)
        {
            clearInterval(timer);
        }

    }
}
//DRAG AND DROP PROJEKTI

function postavi(){
    pomoc='';
    s1  = document.getElementById('p1');
    s2 = document.getElementById('p2');
    s3 = document.getElementById('p3');
    odrediste = document.getElementById('odrediste');
    dogadjaji = document.getElementById('pomocni');

    s1.addEventListener('dragstart',uhvacen);
    s1.addEventListener('dragend',pusten);

    s2.addEventListener('dragstart',uhvacen);
    s2.addEventListener('dragend',pusten);

    s3.addEventListener('dragstart',uhvacen);
    s3.addEventListener('dragend',pusten);

    dogadjaji.addEventListener('drop', ubacen, true);
    dogadjaji.addEventListener('dragenter',ulazak, true);
    dogadjaji.addEventListener('dragover',prelazak, true);
    dogadjaji.addEventListener('dragleave',izlazak, true);
    
}


function uhvacen(e)
{
    s1.style.opacity = '1';
    s2.style.opacity = '1';
    s3.style.opacity = '1';
    element = e.target;
    var code = element.getAttribute('alt');
    e.dataTransfer.setData('text',code);
    pomoc = e.dataTransfer.getData('text');
    element.style.opacity = "0.5";
    dogadjaji.style.display='block';
}
function ulazak(e)
{
    e.preventDefault();
    odrediste.style.border = '3px dashed black' ;
    dogadjaji.style.display = 'block';
}
function prelazak(e)
{
    e.preventDefault();
    odrediste.style.border = '3px dashed black' ;
}
function izlazak(e)
{
    e.preventDefault();
    odrediste.style.border = 'none' ;
    dogadjaji.style.display = 'block';

}
function ubacen(e){
    odrediste.src = pomoc;
    element.style.opacity = '0';
    dogadjaji.style.display='none';
    odrediste.style.border = '3px solid black' ;
}
    
function pusten(e)
{
    e.preventDefault();
    dogadjaji.style.display = 'none';
}


//GALERIJA
function otvori(broj)
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    prikaz = document.getElementById('galerija_prikaz');
    brojslike = document.getElementById('brojslike');
    brojslike.innerHTML = broj+' / 12'
    i = parseInt(broj);
    velika_slika = document.getElementById('velika_slika');
    velika_slika.src='images/galerija/'+broj+'.jpg';
    prikaz.style.display = 'flex';
    prikaz.className += ' lagano'
    trenutna_slicica = document.getElementById('s'+broj);
    trenutna_slicica.style.border = '3px solid rgb(0, 191, 255)';
}

function zatvori()
{
    prikaz.style.display = 'none';
    trenutna_slicica.style.border = 'none';
}

function sledeca()
{
    slicica_prethodna = document.getElementById('s'+i);
    slicica_prethodna.style.border = 'none';
    i++;
    if(i==13) i=1;
    brojslike.innerHTML = i+'/12'
    velika_slika.src = 'images/galerija/'+i+'.jpg';
    trenutna_slicica = document.getElementById('s'+i);
    trenutna_slicica.style.border = '3px solid rgb(0, 191, 255)';

}
function prethodna()
{
    slicica_prethodna = document.getElementById('s'+i);
    slicica_prethodna.style.border = 'none';
    i--;
    if(i==0) i=12;
    brojslike.innerHTML = i+'/12'
    velika_slika.src = 'images/galerija/'+i+'.jpg';
    trenutna_slicica = document.getElementById('s'+i);
    trenutna_slicica.style.border = '3px solid rgb(0, 191, 255)';
}
function promeni(broj)
{
    trenutna_slicica.style.border='none';
    velika_slika.src = 'images/galerija/'+broj+'.jpg';
    trenutna_slicica = document.getElementById('s'+broj);
    trenutna_slicica.style.border = '3px solid rgb(0, 191, 255)';
    brojslike.innerHTML = broj+' / 12'
    i=broj;
}

//KONTAKT

function k_provera()
{
    var ime = document.getElementById('ime');
    mail = document.getElementById('mail');
    var poruka = document.getElementById('poruka');
    covek = document.getElementById('covek');
    robot = document.getElementById('robot');
    sabirak1 = document.getElementById('sabirak1');
    sabirak2 = document.getElementById('sabirak2');
    var sab1 = 0;
    var sab2 = 0;
    rezultat = 0;
    var provera = 0;
    if(ime.value=="")
    {
        alert('Niste uneli ime');
        provera = 1;
    }
    if(mail.value=='')
    {
        alert('Niste uneli mail');
        provera = 1;
    }
    if(poruka.value=="")
    {
        alert('Niste uneli poruku');
        provera = 1;
    }
    if(provera==0)
    {
        robot.style.display = 'block';
        sab1 = Math.floor(Math.random() * 10);
        sab2 = Math.floor(Math.random() * 10);
        sabirak1.innerHTML = sab1;
        sabirak2.innerHTML = sab2;
        rezultat = sab1+sab2;
    }
    else{
        covek.checked = false;
    }
    return false;
}

function unesi()
{
    rezultat_korisnik = parseInt(document.getElementById('rezultat').value);
    var ispis  = document.getElementById('rezultat');
    if(rezultat_korisnik == rezultat)
    {
        robot.style.display = 'none';
        ispis.value = '';
        document.getElementById('posalji').style.display='block';
        covek.checked = false;
    }
    else{
        document.getElementById('posalji').style.display='none';
        ispis.value = '';
        alert('Netacno! Probajte opet!');
        sab1 = Math.floor(Math.random() * 10);
        sab2 = Math.floor(Math.random() * 10);
        sabirak1.innerHTML = sab1;
        sabirak2.innerHTML = sab2;
        rezultat = sab1+sab2;
    }
    return false;
}
function posalji(){

    alert("Vasa poruka je uspesno poslata!");
    document.getElementById('posalji').style.display='none';
    return false;
}


