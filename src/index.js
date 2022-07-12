import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { legacy_createStore as createStore} from 'redux';
import DrumPad from './components/drum-pad';
import Display from './components/display';
const AudioContext = window.AudioContext || window.webkitAudioContext;
const actx = new AudioContext();

class App extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      bankOne : [
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Angelic-drum-roll.wav', name: 'Angelic-drum-roll', key: 'q'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Atmospheric-prelude-drum-roll.wav', name: 'Atmospheric-prelude-drum-roll', key: 'w'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Atmospheric-wind-drum-roll-swoosh.wav', name: 'Atmospheric-wind-drum-roll-swoosh', key: 'e'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Cinematic-ancient-drums-heartbeat.wav', name: 'Cinematic-ancient-drums-heartbeat', key: 'a'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Cinematic-mystery-trailer-drum-hit.mp3', name: 'Cinematic-mystery-trailer-drum-hit', key: 's'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Cinematic-transition-swoosh-heartbeat-trailer.wav', name: 'Cinematic-transition-swoosh-heartbeat-trailer', key: 'd'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Deep-cinematic-subtle-drum-impact.wav', name: 'Deep-cinematic-subtle-drum-impact', key: 'z'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Drum-deep-impact.wav', name: 'Drum-deep-impact', key: 'x'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-one/Drum-hit-with-eco.wav', name: 'Drum-hit-with-eco', key: 'c'},
      ],
      bankTwo : [
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Drum-joke-accent.wav', name: 'Drum-joke-accent', key: 'q'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Fail-Drum-and-bells.wav', name: 'Fail-Drum-and-bells', key: 'w'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Fail-drum-and-xylophone.wav', name: 'Fail-drum-and-xylophone', key: 'e'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Horror-tunnel-drum.wav', name: 'Horror-tunnel-drum', key: 'a'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Metallic-cinematic-drum-trailer-sound.wav', name: 'Metallic-cinematic-drum-trailer-sound', key: 's'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Ominous-drums-appear.wav', name: 'Ominous-drums-appear', key: 'd'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Ominous-drums.wav', name: 'Ominous-drums', key: 'z'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Soft-horror-hit-drum.wav', name: 'Soft-horror-hit-drum', key: 'x'},
        {source: 'http://127.0.0.1:8887/drum-machine/src/drums/drum-two/Tribal-deep-drum-echoes.wav', name: 'Tribal-deep-drum-echoes', key: 'c'},
      ],
      bankOneSelected : true,
      soundOn : true,
      soundName: '',
      powerOn: true,
      // audioContext: new AudioContext(),
      audioContext: actx,
      volumeValue: 0.5,
      gainNode: actx.createGain(),
    }
    this.handleSoundOn = this.handleSoundOn.bind(this);
    this.handleSoundName = this.handleSoundName.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  // UNSAFE_componentWillMount() {
  //   console.log(`UNSAFE_componentWillMount gainNode setState call`);
  //   this.setState({
  //     gainNode: this.state.audioContext.createGain(),
  //   });
  // }

  handleSoundOn() {
    console.log(`handleSoundOn setState call`);
    this.setState({
      soundOn: !this.state.soundOn,
    })
  }

  handleSoundName(name) {
      let newName = name.replace(/(?<=-)\w/g, (l) => l.toUpperCase()).replace(/-/g,' ');
      this.setState({
        soundName: newName,
      })
  }
  handleBank() {
    console.log(`handleBank setState call`);
    this.setState({
      bankOneSelected: !this.state.bankOneSelected,
    })
  }

  handleVolume(value) {
    console.log(`handleVolume setState call`);
    this.setState({
      volumeValue: value,
    })
  }
    
  render() {
    console.log (`index rendered`);
    const currentSoundPack = this.state.bankOneSelected ? this.state.bankOne : this.state.bankTwo;
    return (
    <div className="wrapper">
      <div id="drum-machine">
        <div id="drum-pads">
          {currentSoundPack.map((elem, index) => 
          <DrumPad 
            id={elem.name} 
            key={index} 
            gainNode={this.state.gainNode} 
            source={elem.source} 
            name={elem.name} 
            audioContext={this.state.audioContext} 
            play={this.play} 
            keyboard={elem.key}
            bankOneSelected={this.state.bankOneSelected}
            handleSoundName={this.handleSoundName}
            volumeValue={this.state.volumeValue} 
          />)}
        </div>
          <Display 
            soundOn={this.state.soundOn} 
            audioContext={this.state.audioContext} 
            gainNode={this.state.gainNode} 
            volumeValue={this.state.volumeValue} 
            powerOn={this.state.powerOn}
            soundName={this.state.soundName}
            bankOneSelected={this.state.bankOneSelected}
            handleBank={this.handleBank}
            handleSoundOn={this.handleSoundOn}
            handleVolume={this.handleVolume}
          />
      </div>   
    </div>

    );
  }

}

//--------------------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App className='App'/>
  // </React.StrictMode>
);
