import React from 'react';
import PowerToggle from './power-toggle';
import NameOutput from './name-output';
import Volume from './volume';
import BankToggle from './bank-toggle';

const Display = ( {audioContext, gainNode, soundOn, handleSoundOn, powerOn, soundName, handleBank, bankOneSelected, handleVolume, volumeValue} ) => {
  console.log (`Display rendered`);
  return (
    <div className="display"> 
      <PowerToggle 
        gainNode={gainNode} 
        soundOn={soundOn} 
        handleSoundOn={handleSoundOn}
        powerOn={powerOn}
        volumeValue={volumeValue}
        handleVolume={handleVolume}
      />
      <NameOutput 
        soundName={soundName}      
      />
      <Volume 
        // audioContext={audioContext} 
        gainNode={gainNode} 
        soundOn={soundOn} 
        handleSoundOn={handleSoundOn}
        powerOn={powerOn}
        handleVolume={handleVolume}
        volumeValue={volumeValue}
      />
      <BankToggle handleBank={handleBank} bankOneSelected={bankOneSelected}/>
    </div>
  )
}

export default Display;