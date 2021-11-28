let bellSound = new Audio('https://storage.yandexcloud.net/lofitimer/bell.wav');
bellSound.volume = 0.03;

function ding() {
  bellSound.currentTime = 0;
  bellSound.play();
}

