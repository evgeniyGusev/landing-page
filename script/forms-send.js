// Отправка заявки
$(document).ready(function() {
	$('.modal-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('input').val('');
      $('.modal-wrapper').fadeOut(600);
      $('.submit-modal').fadeIn(400)

      function submitModalHide() {
        $('.submit-modal').fadeOut(400);
      }

      setTimeout(submitModalHide, 2500);

      $('.body').toggleClass('body__mobile-scroll-hidden');
		});
		return false;
	});
});
