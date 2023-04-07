import React, {useEffect, useState} from "react";
import { Navbar, Quote } from "./";
import { getQuotes } from "../api/quotes";


const Main = () => {

function play() {
  new Audio(sound).play()
}

  return (
    <div id="main">
      <Navbar />
      <Quote/>
    </div>
  );
};


export default Main;

