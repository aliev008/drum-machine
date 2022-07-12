import React from 'react'

const SoundOutput = ({ soundName }) => {
  console.log (`NameOutput rendered`);
  // console.log (`SoundName = `, soundName);
  const style = {
    overflow : 'word-break',
  }

  return (
    <div className='nameOutput' style={style}> <p>{soundName}</p></div>
  )
}

export default SoundOutput;