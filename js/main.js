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