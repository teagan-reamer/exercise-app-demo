import {useCallback, useEffect, useState} from 'react'

function Stopwatch ({name, minutes}) {
    const [startTime, runStartTime] = useState(0)
    const [intervalID, runIntervalID] = useState(undefined)
    const [value, setValue] = useState(0)

function reset() {
    runStartTime(undefined);
    runIntervalID(0);
    setValue(0);
}

let callback = useCallback(() => {
    setInterval(() => {
        setValue(value=> value+1)
    }, 10)
    runStartTime(Date.now() + minutes*60*1000)
}, [minutes])

useEffect(() => (() => {
    clearInterval(intervalID)
}))

let currentTime
if(startTime) {
    setInterval(() => {
        setValue(value => value+1)
    }, 10)
}
if(startTime !== undefined) {
    currentTime = new Date(Date.now()-startTime.valueOf())
}

return(
    <>
    <div style={{fontSize : "2em", fontFamily : "monospace", textAlign : "center", color : "#374050"}}>
    <p>{name}</p>
        <p>Time:</p>
        {startTime ?
        `${currentTime.getSeconds()}:${currentTime.getMilliseconds()}`
        : "00:00"}
    </div>
    <br></br>
    <div style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <button style={{fontSize : "1em", fontFamily : "monospace", color : "#374050"}} onClick={() => callback()}>Start</button>
    <button style={{fontSize : "1em", fontFamily : "monospace", color : "#374050"}} onClick={() => reset()}>Reset</button>
    </div></>
)
}

export default Stopwatch
