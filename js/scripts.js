/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$('.regalo').on('click', function() {
  $('.regalo-section').fadeOut("slow", function() {
    $('.cupon-section').fadeIn();
  });
})
