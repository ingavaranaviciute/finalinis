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




$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )

});
sr.reveal('.progress', {duration: 1000});

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


sr.reveal('.slideLink', {origin: 'right', duration: 900, distance: '500px'});
sr.reveal('.slideHeading', {origin: 'right', duration: 1500, distance: '500px'});
sr.reveal('.slideText', {origin: 'right', duration: 2100, distance: '500px'})
sr.reveal('.slideShop', {origin: 'right', duration: 2400, distance: '500px'});
