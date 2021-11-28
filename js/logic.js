let playBtnElement = document.getElementById("play-btn-pic");
const PLAY_BTN_ICON = "play_circle_filled";
const PAUSE_BTN_ICON = "pause_circle_filled";

// Timer logic
let timer = new Timer(100);
timer.onUpdate = function() {
  displayTimeMs(timer.remainingMs);
}
timer.onPause = function() {
  player.pauseVideo();
  playBtnElement.innerHTML = PLAY_BTN_ICON;
  timeOfTimer.disabled = false;
  ding();
}
timer.onStop = function() {
  player.pauseVideo();
  playBtnElement.innerHTML = PLAY_BTN_ICON;
  displayTimeMs(timer.timeout);
  timeOfTimer.disabled = false;
  if (timer.state === "running") {
      // we don't want to ding if the timer was already paused or stopped
      ding();
  }
}
timer.onStart = function() {
  player.playVideo();
  playBtnElement.innerHTML = PAUSE_BTN_ICON;
  timeOfTimer.disabled = true;
}
timer.onSetTimeout = function(timeoutMs) {
  displayTimeMs(timeoutMs);
}
timer.setTimeout(25 * 60 * 1000);

// Mute button logic
let muteBtnElement = document.getElementById("mute-btn-pic");
const MUTE_BTN_ICON = "volume_up";
const UN_MUTE_BTN_ICON = "volume_off";

function muteBtnClick() {
  if (player.isMuted()) {
      player.unMute();
      muteBtnElement.innerHTML = MUTE_BTN_ICON;
  } else {
      player.mute();
      muteBtnElement.innerHTML = UN_MUTE_BTN_ICON;
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
  if (ym) {
    ym(86455965,'reachGoal','playBtnClick');
  }
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

