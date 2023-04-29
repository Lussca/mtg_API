import React, { useState } from 'react';
import './App.css'

function App() {
  const [cardName, setCardName] = useState('');
  const [cardImageUrl, setCardImageUrl] = useState('');
  const [cardInfo, setCardInfo] = useState('');
  const [cardTypeLine, setCardTypeLine] = useState('');

  const handleCardSearch = async () => {
    const response = await fetch(`https://api.scryfall.com/cards/named?exact=${cardName}`);
    const data = await response.json();
    setCardImageUrl(data.image_uris.normal);
    setCardInfo(data.oracle_text);
    setCardTypeLine(data.type_line);
  };

  return (
    <div className='App'>
      <div className="search">
        <input className='inputSearch' type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
        <button onClick={handleCardSearch}>Search</button>
      </div>
      {cardImageUrl && <img className='card' src={cardImageUrl} alt={cardName} />}
      <div className='infoCard'>
        {cardTypeLine && <p className='info'>{cardTypeLine}</p>}
      </div>
      {cardInfo && <p className='infoText'>{cardInfo}</p>}
    </div>
  );
}

export default App;