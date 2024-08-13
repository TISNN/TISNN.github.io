"use strict";

(function ($) {
  'use strict';

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data; // Success function

  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
  } // fail function


  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    }).done(done_func).fail(fail_func);
  });
})(jQuery);

// 获取所有具有 "contact-button" 类名的按钮
var contactButtons = document.querySelectorAll('.contact-button');

// 为每个按钮添加点击事件监听器
contactButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        openModal();
    });
});

function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}