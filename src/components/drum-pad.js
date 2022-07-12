import React, { useState, useEffect, useLayoutEffect} from 'react'
// const AudioContext = window.AudioContext || window.webkitAudioContext;
const DrumPad = ( {source, keyboard, gainNode, handleSoundName, name, id, bankOneSelected, audioContext, volumeValue} ) => {
  console.log (`DrumPad rendered`);

  let audio;
  // console.log(`audio`, audio);
  function play() {
    // console.log(`play function`);
    // console.log(`play function audio`, audio);
    // console.log(`volumeValue`, volumeValue);
    // console.log(`gainNode`, gainNode.gain.value);
    let newSource = audioContext.createBufferSource();
    newSource.buffer = audio;
    newSource.connect(gainNode).connect(audioContext.destination);
    newSource.start();
    handleSoundName(name);
   }
  useEffect(() => {
    fetch(source).then(resp => resp.arrayBuffer())
    .then(buf => audioContext.decodeAudioData(buf))
    .then(audioBuffer => audio = audioBuffer)
    // .then(() => newSource.connect(gainNode).connect(audioContext.destination))
    .catch( console.error );

  //   function play() {
  //     let audio;
  //     fetch(source).then(resp => resp.arrayBuffer())
  //     .then(buf => audioContext.decodeAudioData(buf))
  //     .then(audioBuffer => audio = audioBuffer)
  //     .catch( console.error );
  //     console.log(`volumeValue`, volumeValue);
  //     console.log(`gainNode`, gainNode.gain.value);
  //     let newSource = audioContext.createBufferSource();
  //     newSource.buffer = audio;
  //     newSource.connect(gainNode).connect(audioContext.destination);
  //     newSource.start();
  //     handleSoundName(name);
  //  }

      window.addEventListener('keypress', (e) => {
        if (e.key === keyboard) {
          play();
          handleSoundName(name);
        }
      
      // document.querySelector('.drum-pad-key').addEventListener('click', () => {
      //   console.log('event');
      //     play();
      //     handleSoundName(name);
      // })

      })

      console.log(`inside useEffect main`);
      return () => {
        audio = null;
        // console.log(`audio in return`, audio);
        window.removeEventListener('keypress', e => {
          if (e.key === keyboard) {
            play();
            handleSoundName(name);
          }
        })

      //   document.querySelector('.drum-pad-key').removeEventListener('click', () => {
      //     play();
      //     handleSoundName(name);
      // })
       console.log(`inside useEffect return`);
      }
  }, [bankOneSelected]);

  return (
    <div className="drum-pad">
        <button 
          id={id} 
          onClick={play}
          tabIndex="0"
          className='drum-pad-key btn-drum'
        >
          {keyboard.toUpperCase()}
        </button>
    </div>
  )
}

export default DrumPad;