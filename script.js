$(document).ready(function(){
	$('.navbar_burger').click(function(event){
		$('.navbar_burger,.navbar_link').toggleClass('active');
		$('body').toggleClass('lock');
	});
})
$(document).ready(function(){
	$('.flowing-scroll').click(function(event){
		


	});
})

$('.flowing-scroll').on('click', function() {
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if (dest !== undefined && dest !== '') { // проверяем существование
    $('html').animate({
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
    );
  }
  return false;
});
