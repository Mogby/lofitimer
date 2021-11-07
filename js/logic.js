let playBtnElement = document.getElementById("play-btn-pic");
let playBtnIcon = "play_circle_filled";
let pauseBtnIcon = "pause_circle_filled";

// Timer logic
let timer = new Timer(100);
timer.onUpdate = function() {
  displayTimeMs(timer.remainingMs);
}
timer.onPause = function() {
  player.pauseVideo();
  playBtnElement.innerHTML = playBtnIcon;
  timeOfTimer.disabled = false;
  ding();
}
timer.onStop = function() {
  player.pauseVideo();
  playBtnElement.innerHTML = playBtnIcon;
  displayTimeMs(timer.timeout);
  timeOfTimer.disabled = false;
  if (timer.state === "running") {
      // we don't want to ding if the timer was already paused or stopped
      ding();
  }
}
timer.onStart = function() {
  player.playVideo();
  playBtnElement.innerHTML = pauseBtnIcon;
  timeOfTimer.disabled = true;
}
timer.onSetTimeout = function(timeoutMs) {
  displayTimeMs(timeoutMs);
}
timer.setTimeout(25 * 60 * 1000);

// Mute button logic
let muteBtnElement = document.getElementById("mute-btn-pic");
let muteBtnIcon = "volume_up";
let unMuteBtnIcon = "volume_off";

function muteBtnClick() {
  if (player.isMuted()) {
      player.unMute();
      muteBtnElement.innerHTML = muteBtnIcon;
  } else {
      player.mute();
      muteBtnElement.innerHTML = unMuteBtnIcon;
  }
}

// Play button logic
function updateTimeout() {
  let timeoutSeconds = secondsFromTimeString(timeOfTimer.value);
  let timeoutMs = timeoutSeconds * 1000;
  timer.stop();
  timer.setTimeout(timeoutMs);
}
function playBtnClick() {
  if (timer.state === "running") {
    timer.pause();
  } else {
    timer.start();
  }
}

// Volume box logic
function changeVolume(value) {
  player.setVolume(value)
}

