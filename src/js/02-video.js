import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setTime({ seconds }) {
  try {
    localStorage.setItem('videoplayer-current-time', seconds);
  } catch (error) {
    console.error('Set err', error.message);
  }
}

player.on('timeupdate', throttle(setTime, 1000));

// function getTime() {
//   try {
//     return localStorage.getItem('videoplayer-current-time') || 0;
//   } catch (error) {
//     console.error('Get err', error.message);
//   }
// }

// player.setCurrentTime(getTime());
// --------------------------------------------------------------------------------

const saveTime = localStorage.getItem('videoplayer-current-time') || 0;
const currentTime = JSON.parse(saveTime);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
