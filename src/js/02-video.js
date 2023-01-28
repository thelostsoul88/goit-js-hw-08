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

function getTime() {
  try {
    return localStorage.getItem('videoplayer-current-time') || 0;
  } catch (error) {
    console.error('Get err', error.message);
  }
}

player.setCurrentTime(getTime());
