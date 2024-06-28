/** from number to string */
const msToMinAndSec = (millis)=> {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

millisToMinutesAndSeconds(298999); // "4:59"
millisToMinutesAndSeconds(60999);  // "1:01"

/** from string to number */
const minAndSecToMs = (minSec)=> {
    let minutes = parseInt(minSec.slice(0, minSec.length-3));
    let seconds = parseInt(minSec.slice(minSec.length-2, minSec.length));
    let millis = minutes * 60000 + seconds * 1000;
    return millis;
  }
