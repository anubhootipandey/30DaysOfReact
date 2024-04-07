import React, { useState} from 'react';
import './App.css';

const App = () => {
const [website, setWebsite] = useState('');
const [qrUrl, setQrUrl] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${website}`);
};

return (
  <div className='card-container'>
    <h1>QR Code Generator</h1>
    <form onSubmit={handleSubmit}>
      <label class="form-label">
        Type:
        <input type="text" class="form-control" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </label>
      <input type="submit" class="form-control" value="Generate QR" />
    </form>
    <div className="qr-holder">{qrUrl && <img src={qrUrl} alt="QR code for website" />}</div>
  </div>
  );
};
export default App;