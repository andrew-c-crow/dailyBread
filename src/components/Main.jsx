import React, {useEffect, useState} from "react";
import { Navbar } from "./";
import { getQuotes } from "../api/quotes";
import ReactSound from "react-sound";

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
      <ReactSound
      url="https://music.amazon.com/podcasts/b8e14c0b-3e48-4581-8ce8-f66be40035e7/episodes/32cda96e-0bb1-45ef-8c59-2e304cbea9ac/calm-pills---soothing-space-ambient-and-piano-music-for-relaxing-peaceful-sleep-reading-or-mindful-meditation-le-code"
      playStatus={ReactSound.status.PLAYING}
      playFromPosition={300}
      />
      
      {quote.map((quote) => {
        return (
        <div key={quote.id}>
          <p>{quote.quote}</p>
        </div>
        )
      })}
      
    </div>
  );
};


export default Main;