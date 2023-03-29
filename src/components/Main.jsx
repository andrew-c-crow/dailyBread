import React, {useEffect, useState} from "react";
import { Navbar } from "./";
import { getQuotes } from "../api/quotes";
import ReactSound from "react-sound";
import Sound from 'react-sound'

const Main = () => {
const [quote, setQuote] = useState([])


  useEffect(() => {
    async function callGetQuote() {
      const currentQuote = await getQuotes()
      setQuote(currentQuote)
    }
    callGetQuote()
  }, [])



  return (
    <div id="main">
      <Navbar />
      <Sound
      url='06 Light Through the Veins.m4a.'
      playStatus={ReactSound.status.PLAYING}
      playFromPosition={300}
      />
      <div>
        {quote.quote}
      </div>
      
    </div>
  );
};


export default Main;

