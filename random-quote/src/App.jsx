import { useEffect, useState } from 'react';
import './App.css';

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <>
    <h1>Random Quote Generator</h1>
    <div>
      <button onClick={getNewQuote}>New Quote</button>
      {quote && (
          <>
            <h3>{quote.text}</h3>
            <i>- {quote.author || 'Unknown'}</i>
          </>
        )}
    </div>
    </>
  );
};

export default App;
