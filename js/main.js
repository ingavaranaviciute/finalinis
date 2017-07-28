var time = 3000;

// $('.clientsNumber').animateNumber({number: 1500}, time);


// // $(document).ready(function() {
//   $(window).fadeThis({
//     offset: 30
//   });
// // });

// Changing the defaults
window.sr = ScrollReveal({reset: false});

// Customizing a reveal set

function clients(ingosElementas) {
// var darysimSitaPoReveal = function (ingosElementas) {
  //sitas ivyks tada, kada ivyks "reaveal"
  // domEl yra elementas, kuris atsiranda, taigi su jq galim padaryti, kad butent to elemento skaiciai didetu

  // $('.projectsNumber').animateNumber({number: 384}, time);
  $('.clientsNumber').animateNumber({number: 1500}, time);
}

sr.reveal('.innerNumb.clients', {origin: 'top', beforeReveal: clients, delay: 0});

function awards(ingosElementas) {
  $('.awardsNumber').animateNumber({number: 13}, time);
}

sr.reveal('.innerNumb.awards', {origin: 'top', beforeReveal: awards, delay: 250});

function lines(ingosElementas) {
  $('.lineNumber').animateNumber({number: 94771}, time);
}

sr.reveal('.innerNumb.lines', {origin: 'top', beforeReveal: lines, delay: 500});

function projects(ingosElementas) {
  $('.projectsNumber').animateNumber({number: 384}, time);
}

sr.reveal('.innerNumb.projects', {origin: 'top', beforeReveal: projects, delay: 750});


//
// $(document).ready(function() {
//     $('.progress_bar .fill_con').css("width",
//         function() {
//             return $(this).attr("aria-valuenow") + "%";
//         }
//     )
// });

// function move() {
//     var elem = document.getElementById("fill");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 70) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
// }


// Tam kad sita f-ja naudotis, reiktu nusirodyt html'e skaicius iki kuriu turi dideti

// function kvieciamaKaiAtsirandaKazkas(elemKurisAtsirado) {
//
//   // console.log(elemKurisAtsirado);
//   var jQueryElementasKurisAtsirado = $(elemKurisAtsirado);
//
//   var animated = jQueryElementasKurisAtsirado.find('.animated');
//
//   var skaiciusKurisTuriButiUzauges = animated.text();
//
//   animated.animateNumber({number: skaiciusKurisTuriButiUzauges}, 1000);
// }
//
// sr.reveal('.innerNumb', {origin: 'top', beforeReveal: kvieciamaKaiAtsirandaKazkas, delay: 0}, 300);


// $(document).ready(function() {
//     $('.progress .progress-bar').css("width",
//         function() {
//             return $(this).attr("aria-valuenow") + "%";
//
//
//         }
//     )
//
// });


// Sitos funkcijos paskirtys:
// 1. Animuoti skaiciu (po to kai atsiranda elementas - uzsiskrollina)
// 2. Animuoti sito (atsiradusio) elemento progress-bar
function startProgress(revealedBar) {
  // revealedBar yra vienas is .progress elementu


  // Su jQuery galime tame elemente rasti kita elementa pagal jo klase, ar id,  ar kt.
  var valElementas = $(revealedBar).find(".animVal");


  // turint (arba selectinant su jQruery) elementa, galime is to elemento paimti jo teksta (aisku ir panaudoti
  // pvz. isideti ta teksta i kintamaji.
  var number = $(valElementas).text();
  console.log(revealedBar);


  $(valElementas).animateNumber({number: number}, time);
  // $('.progress-1 .animVal').animateNumber({number: 80}, time);


  // ties sita vieta jau pradejom animuoti numeri,
  // tad judam toliau ties progress-baro animavimu

  var progressBar = $(revealedBar).find(".progress-bar");
  var width = $(progressBar).attr("aria-valuenow");

  $(progressBar).css("width", width + "%")

}

sr.reveal('.progress', {beforeReveal: startProgress, duration: 1000});


// function proBar(ingosElementas) {
//     $('.val').animateNumber({number: 100});
// }

// sr.reveal('.last.progress', {beforeReveal: proBar, delay: 100});

// $('#lines').animateNumber({ number: 165});
//
// var myIndex = 0;
// carousel();
//
// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 5000);
// }

// window.sr = ScrollReveal({reset: true});

sr.reveal('.slideLink', {origin: 'right', duration: 900, distance: '500px'});
sr.reveal('.slideHeading', {origin: 'right', duration: 1500, distance: '500px'});
sr.reveal('.slideText', {origin: 'right', duration: 2100, distance: '500px'})
sr.reveal('.slideShop', {origin: 'right', duration: 2400, distance: '500px'});

$('#navbar').stickit();


function toggleIcon(e) {
  $(e.target)
    .prev('.panel-heading')
    .find(".more-less")
    .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


// function myMap() {
//   var mapProp = {
//     center: new google.maps.LatLng(55.724002, 21.127996),
//     zoom: 17,
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

function myMap() {
  var myCenter = new google.maps.LatLng(55.724002, 21.127996);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 16};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

// function bootstrap_equalizer() {
//     $(".equalizer").each(function() {
//         var heights = $(this).find(".watch").map(function() {
//                 return $(this).height();
//             }).get(),
//
//             maxHeight = Math.max.apply(null, heights);
//
//         $(".watch").height(maxHeight);
//     });
// }
//
// $(document).ready(function() {
//     bootstrap_equalizer();
// });
//
// $(window).resize(function () {
//     bootstrap_equalizer();
// });

$(document).ready(function(){
  $("button").click(function(){
    $(".topbar").slideToggle();
  });
});

// $(".topbar").toggleClass("on")
//


if ($(".topbar").hasClass("on")){
  $(".topbar").removeClass("on")
  $( ".down" ).show();
}
  else {
      $(".topbar").addClass("on")
      $( ".up" ).show();
}
























