var $hauntedText = $('[data-haunted-text]');
var maxDuration = 2000;
var maxDelay = 500;
var minDuration = maxDuration - maxDelay;

$hauntedText.blast({
  delimiter: 'character',
});

setTimeout(function() {
  $hauntedText.find('.blast').each(function(i, el) {
    var $el = $(el);

    var duration = getRandomValue(minDuration, maxDuration);
    var delay = maxDuration - duration;
    var blur = getRandomValue(2, 10);

    // From
    $el.velocity({
      opacity: 0,
      blur: blur,
    }, {
      duration: 0,
    });

    // To
    $el.velocity({
      opacity: 1,
      blur: 0,
    }, {
      duration: duration,
      delay: delay,
      ease: [250, 0],
    });
  });
  
  $hauntedText.css({visibility: 'visible'});
}, 500);

var getRandomValue = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};