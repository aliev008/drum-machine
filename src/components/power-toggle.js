import React, {useEffect} from 'react'
import '../index.scss';

const PowerToggle = ( { gainNode, handleSoundOn, soundOn, powerOn, volumeValue, handleVolume} ) => {
  console.log (`PowerToggle rendered`);
  // console.log(`volumeValue`, volumeValue);
  // console.log(`gainNode.gain.value`, gainNode.gain.value);

  const toggleChange = (e) => {
    console.log(`e`, e); 
    if (soundOn) {
      gainNode.gain.value = -1;
      handleVolume(-1);
      handleSoundOn();
    } else {
      gainNode.gain.value = volumeValue;
      handleSoundOn();
    }
  }
  // useEffect(() => {
  //   const toggleButton = document.querySelector('#toggle-button');

  //   if (soundOn && !toggleButton.checked) {
  //     toggleButton.checked = true;
  //   }

  //   toggleChange = () => {
  //     if (soundOn) {
  //       gainNode.gain.value = -1;
  //       handleSoundOn();
  //     } else {
  //       handleSoundOn();
  //     }
  //   }

  //   toggleButton.addEventListener('change', function() {
  //     // console.log('this', this);
  //     // console.log('this checked', this.checked);
  //     // let temp = gainNode.gain.value;
  //     if (soundOn) {
  //       gainNode.gain.value = -1;
  //       handleSoundOn();
  //     } else {
  //       handleSoundOn();
  //     }
  //     console.log(`power toggle applied`);
  //   }, false);
  // }, []);
  
  // console.log('soundOn outside of useEffect in Power Toggle Component', soundOn);


  return (
    <div className="powerToggle">
      <div className="btn-container">
      <label htmlFor="toggle-button" className="text">Power</label>
      {/* <input defaultChecked type="checkbox" id="toggle-button" className="toggle-button" /> */}
      <input checked={soundOn ? true : false} onChange={(e) => toggleChange(e)} type="checkbox" id="toggle-button" className="toggle-button" />
      {/* {soundOn
      ? <input defaultChecked type="checkbox" id="toggle-button" className="toggle-button" />
      : <input type="checkbox" id="toggle-button" className="toggle-button" />
      } */}

     </div>
    </div>
  )
}

export default PowerToggle;