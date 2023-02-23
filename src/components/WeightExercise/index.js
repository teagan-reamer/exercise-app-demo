function Counter(props){
    return(
        <>
        <div style={{fontSize : "2em", fontFamily : "monospace", textAlign : "center", color : "#374050"}}>
        <p>{props.name}</p>
        Reps: {props.count}</div><br></br>
        <div style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button style={{"fontSize" : "1em", "fontFamily" : "monospace", color : "#374050"}} onClick={() => props.setCount (count=>count+1)}>Add Count</button>
        <button style={{"fontSize" : "1em", "fontFamily" : "monospace", color : "#374050"}} onClick={() => props.setCount (0)}>Reset</button>
        </div></>
    )
}

export default Counter