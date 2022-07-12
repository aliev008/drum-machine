import React, {useEffect} from 'react'
import '../index.scss';

const BankToggle = ( { gainNode, handleSoundOn, soundOn, powerOn, handleBank, bankOneSelected} ) => {
  console.log(`bank-toggle rendered`);
  //  console.log (`bankToggle rendered`);
  //  console.log('bankOneSelected : ', bankOneSelected);
  //  useEffect(() => {
  //   let bankButton = document.querySelector('.bank-toggle-button');
  //   // console.log('bankOneSelected : ', bankOneSelected);

  //   if (bankOneSelected) {
  //     bankButton.checked = true;
  //   } else {
  //     bankButton.checked = false;
  //   }

  //   bankButton.addEventListener('change', (e) => {
  //       handleBank();
  //       // console.log('bankOneSelected : ', bankOneSelected);
  //   }, false)
  //  }, []);
   
   
  return (
    <div className="bankToggle">
      <div className="btn-container">
      <label htmlFor="toggle-button" className="text">Bank</label>
      <input onChange={() => handleBank()} type="checkbox" id="toggle-button" className="toggle-button bank-toggle-button" />

     </div>
    </div>
  )
}

export default BankToggle;