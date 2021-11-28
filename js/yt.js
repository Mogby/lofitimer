var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '5qap5aO4i9A',
    playerVars: {
      'autoplay': 0,
      'disablekb': 1,
      'playlist': '5qap5aO4i9A',
      'loop': 1,
    },
  });
}

