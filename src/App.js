// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Stopwatch from './components/DurationExercise';
import Counter from './components/RepetitionExercise';
 const durArray = [
  {name: "Running"},
 ];
 const repArray = [
  {name: "Push Ups"},
 ];
 const weightArray = [
  {name: "Bench Press"},
 ];

 export default function App(startTime, runStartTime){
  let [currentCount, setCurrentCount] = useState(0)
  let [displayComponents, setDisplayComponent] = useState(-1)
  let components = [
    <Stopwatch name={<>{durArray.map(({name}) => (<h2>{name}</h2>))}</>
  } minutes={2}
  startTime={startTime} runStartTime={runStartTime}></Stopwatch>,

  <Counter name={<>{repArray.map(({name}) => (<h2>{name}</h2>))}</>
} count={currentCount}
setCount={setCurrentCount} message={""}></Counter>,

<Counter name={<>{weightArray.map(({name}) => (<h2>{name}</h2>))}</>
} count={currentCount}
setCount={setCurrentCount} message={""}></Counter>
  ]

  return (
    (displayComponents !== -1 ?
      <>
      {displayComponents !== -1 ? components[displayComponents] :undefined}<br></br><br></br>
      <div style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button style={{"fontSize" : "1em", "fontFamily" : "monospace", color : "#374050"}} onClick={() => setDisplayComponent(-1)}>Back</button>
      </div></>
      : <>
      <div style={{fontSize : "2em", fontFamily : "monospace", textAlign : "center", color : "#374050"}}>
      <h1>Exercises</h1>
      </div>

      <div style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {repArray.map(({name}) => (
        <p>
          <button style={{"fontSize" : "2em", "fontFamily" : "monospace" , color : "#CC0000"}} onClick={() => setDisplayComponent(1)}>{name}</button>
      </p>
      ))}
      </div>

      <div style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {durArray.map(({name}) => (
        <p>
          <button style={{"fontSize" : "2em", "fontFamily" : "monospace", color : "#009C1F"}} onClick={() => setDisplayComponent(0)}>{name}</button>
        </p>
      ))}
      </div>

      <div style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {weightArray.map(({name}) => (
        <p>
          <button style={{"fontSize" : "2em", "fontFamily" : "monospace", color : "#7B009C"}} onClick={() => setDisplayComponent(2)}>{name}</button>
        </p>
      ))}
      </div>
      </>
    )
  );
}