var titles = {

}

var moveToPoint = function(point) {
  $('html, body').animate({
    scrollTop: point
 }, 1000);
}
window.moveToPoint = moveToPoint

$(document).ready(function(){

  $(window).scroll(function(){
    var currentScrollTop = $(window).scrollTop()

    // MAIN HEADING OPACITY CONTROL
    var mainHeadingOpacity =  1 - ((900-currentScrollTop) / 900)
    $('.mainHeading').css('opacity', mainHeadingOpacity)

    // MAIN HEADING TITLE CONTROL
    if(currentScrollTop < 2100) {
      $('.mainHeading h2').html('About')
    }

    if(currentScrollTop >= 2350 && currentScrollTop < 3300) {
      $('.mainHeading h2').html('Program')
    }

    if(currentScrollTop >= 3300) {
      $('.mainHeading h2').html('Partners')
    }

    // PARALAX EFFECTS

  })
  .trigger('scroll')

  $('.switchAuthor').click(function(){
    var mainEl = $(this).parent().parent().parent().parent()
    $('.mainProgram, .author', mainEl).hide()
    $('.author-' + $(this).attr('data-author'), mainEl).show()
  })

  $('.backToMain').click(function(){
    var mainEl = $(this).parent().parent().parent()
    $('.author', mainEl).hide()
    $('.mainProgram', mainEl).show()
  })

  $('.showProgram').click(function(){
    $('.program .day' + $(this).attr('data-id')).show()
  })

  $('.day .close').click(function(){
    $(this).parent().hide()
  })

  $('.author a').each(function(){
    if(!$(this).hasClass('backToMain')) {
      $(this).attr('target', '_blank')
    }
  })

})
