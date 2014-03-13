$(document).ready(function() {
  var speed = 3000;
  function revolveText(selector, values) {
    var replacement = values.shift();
    values.push(replacement);
    $(selector).fadeOut(function() {
      $(this).text(replacement);
    }).fadeIn();
    setTimeout(function() {
      revolveText(selector, values);
    }, speed);
  }
  function revolveSrc(selector, values) {
    var replacement = values.shift();
    values.push(replacement);
    $(selector).fadeOut(function() {
      $(this).attr('src', replacement);
    }).fadeIn();
    setTimeout(function() {
      revolveSrc(selector, values);
    }, speed);
  }
  var banner_slogans = ['Promoting Cargo Transport by Sail',
                        'Supporting Local Food Production and Trade',
                        'Harnessing Wind for a Blue Economy'];
  var banner_images = ['images/banner2.jpg','images/banner3.jpg','images/banner.jpg'];
  setTimeout(function() {
    revolveText("#banner .caption span", banner_slogans);
    revolveSrc("#banner img.banner_lead", banner_images);
  }, speed);
});