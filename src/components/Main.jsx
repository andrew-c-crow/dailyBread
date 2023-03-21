import React, {useEffect, useState} from "react";
import { Navbar } from "./";
import { getQuotes } from "../api/quotes";

const Main = () => {



  useEffect(() => {
    async function callGetQuote() {
      const currentQuote = await getQuotes()
    }
    callGetQuote()
  }, [])

  return (
    <div id="main">
      <Navbar />
    </div>
  );
};

export default Main;