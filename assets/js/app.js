

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:4
//         }
//     }
// })

$('.carousel').carousel({
    interval: 2000,
    pause:false
  })

  $('.owl-carousel').owlCarousel({
    margin:6,
    loop:true,
    autoWidth:true,
    items:1
})
