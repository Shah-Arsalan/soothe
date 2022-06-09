import "./Quotes.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [newQuote, setNewQuote] = useState({
    quote: "",
    author: "",
  });

  const getQuote = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setNewQuote({
        ...newQuote,
        quote: response.data[Math.floor(Math.random() * 1600)].text,
        author: response.data[Math.floor(Math.random() * 1600)].author,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <div className="quote-container">
        <p>"{newQuote.quote}"</p>
        <p>- {newQuote.author}</p>
      </div>
    </>
  );
};
export { Quotes };
