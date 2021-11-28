// Helpers

function zeroPad(num, size) {
  numStr = num.toString();
  if (numStr.length >= size) {
    return numStr;
  }
  return numStr.padStart(size, '0');
}

function formatTimeFromSeconds(seconds) {
  if (isNaN(seconds)) {
    return;
  }
  if (seconds >= 24 * 60 * 60) {
    seconds = 24 * 60 * 60 - 1;
  }
  if (seconds < 0) {
    seconds = 0;
  }
  seconds = Math.floor(seconds);
  let displaySeconds = seconds % 60;
  let displayMinutes = Math.floor(seconds / 60) % 60;
  let displayHours   = Math.floor(seconds / 60 / 60);

  displaySeconds = zeroPad(displaySeconds, 2);
  displayMinutes = zeroPad(displayMinutes, 2);
  displayHours   = zeroPad(displayHours, 2);

  return `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function secondsFromTimeString(timeString) {
  let hhmmss = timeString.split(":");
  let hours = parseInt(hhmmss[0])
  let minutes = parseInt(hhmmss[1])
  let seconds = 0;
  if (hhmmss[2]) {
    seconds += parseInt(hhmmss[2]);
  }
  seconds = hours * 60 * 60 + minutes * 60 + seconds
  if (isNaN(seconds)) {
    return undefined;
  }
  return seconds;
}

// Logic

let timeOfTimer = document.getElementById('timer-input');

function displayTimeMs(timeMs) {
  let timeSeconds = timeMs / 1000;
  let timeString = formatTimeFromSeconds(timeSeconds);
  timeOfTimer.value = timeString;
}

