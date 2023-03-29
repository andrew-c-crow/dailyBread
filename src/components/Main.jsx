import React, {useEffect, useState} from "react";
import { Navbar } from "./";
import { getQuotes } from "../api/quotes";


const Main = () => {
const [quote, setQuote] = useState([])


  useEffect(() => {
    async function callGetQuote() {
      const currentQuote = await getQuotes()
      setQuote(currentQuote)
    }
    callGetQuote()
  }, [])

  function play() {
    new Audio(sound).play()
  }

  return (
    <div id="main">
      <Navbar />
      <div>
        {quote.quote}
      </div>
      
    </div>
  );
};


export default Main;

