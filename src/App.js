import React, { useState } from 'react';
import d2 from "./imgs/d2.jpg";
import d1 from "./imgs/dan.jpg";
import d3 from "./imgs/daniel2.png";
import d4 from "./imgs/dn.jpg";
import d5 from "./imgs/danny.jpg";
import d6 from "./imgs/d6.jpg";
import d7 from "./imgs/d7.jpeg";
import d8 from "./imgs/d8.jpeg";


import './App.css';

const MySty = {
  "background": "gray",
  "padding": "1vw",
  "width": "100%",
}

const MySty2 = {
  "background": "black",
  "color": "silver",
  "padding": "1vw",
  "width": "100%",
}

const restrict = {
  "width": "100%",
}

function Image({data}){
  return (
    <div style={MySty}>
      <img src={data} style={restrict}></img>
    </div>
  )
}

function Intro(){

  return (
    <div style={MySty2}>
      <h1 onClick={()=>Funk()}>
      <span className="silver">D</span>
      <span className="silver">a</span>
      <span className="silver">n</span>
      <span className="silver">i</span>
      <span className="silver">e</span>
      <span className="silver">l </span>

      <span className="silver">D</span>
      <span className="silver">a</span>
      <span className="silver">n</span>
      <span className="silver">n</span>
      <span className="silver">a</span>
      <span className="silver">s</span>
      </h1>
      <h2 id="output"></h2>
    </div>
  )
}

function Funk(){
  console.log("funk");
}

function Footer(){
  return (
    <div style={MySty2}>
      <h2>Contact Agent: 805 862 7047</h2>
      <h4>Made by <a href="https://maxjann.com" className="silver">Jann Software</a></h4>
    </div>
  )
}

function App(){
  const { mood, changeMood} = useState("happy");

  const r = [d1,d2,d3,d4,d5];

  return (
    <div className="App">
      < Intro />
      < Image data={d3} />
      {/* <a href="spot">Contact</a> */}
      < Image data={d5} />
      < Image data={d6} />
      < Image data={d1} />
      < Image data={d8} />
      < Image data={d2} />
      < Image data={d3} />
      < Footer id="spot"/>
    </div>
  )
}

export default App;
