import React, { useState } from 'react';
import d2 from "./imgs/d2.jpg";
import d1 from "./imgs/dan.jpg";
import d3 from "./imgs/daniel2.png";
import d4 from "./imgs/dn.jpg";
import d5 from "./imgs/danny.jpg";

import './App.css';

const MySty = {
  "background": "green",
  "padding": "1vw",
  "width": "60%",
}

function Image({data}){
  return (
    <div>
      <img src={data}></img>
    </div>
  )
}

function Intro(){
  return (
    <div>
      <h1 onClick={()=>Funk()}>Daniel Dannas</h1>
      <h2 id="output"></h2>
    </div>
  )
}

function Funk(){
  console.log("funk");
}

function Footer(){
  return (
    <div>
      <h2>Contact Agent: 805 862 7047</h2>
      <h4>Made by <a href="https://maxjann.com">Jann Software</a></h4>
    </div>
  )
}

function App(){
  const { mood, changeMood} = useState("happy");

  const r = [d1,d2,d3,d4,d5];

  return (
    <div className="App">
      < Intro />
      < Image data={d2} />
      {/* < Image data={d1} /> */}
      < Image data={d4} />
      {/* < Image data={d5} /> */}
      < Image data={d3} />
      < Footer />
    </div>
  )
}

export default App;
