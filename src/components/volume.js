import React, { useEffect } from 'react'

const Volume = ( {audioContext, gainNode, handleSoundOn, soundOn, powerOn, handleVolume, volumeValue} ) => {
  console.log (`Volume rendered`);
  const onVolumeChange = (e) => {
      handleVolume(e.target.value);
      gainNode.gain.value = volumeValue;

      if (e.target.value === '-1') {
        handleSoundOn();
      }

      if (e.target.value > "-1" && !soundOn) {
        handleSoundOn();
      }
    }
  // console.log (`Volume rendered`);
  // useEffect(() => {
  //   const volumeControl = document.querySelector('#volume');

  //   if (soundOn) {
  //     gainNode.gain.value = volumeControl.value;
  //   }

  //   volumeControl.addEventListener('input', function() {
  //     gainNode.gain.value = this.value; 
  //   }, false);
  // }, [soundOn]);

  // console.log('soundOn outside of useEffect in Volume Component', soundOn);

  return (
    <div className="volumeInput">
      <input  onChange={onVolumeChange} className="inputStyle" type="range" id="volume" min="-1" max="2" defaultValue={volumeValue} step="0.01"></input>
    </div>
  )
}

export default Volume;