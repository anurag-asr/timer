import React from 'react'

const Timer = () => {

const [time,setTime]=React.useState(11);
const [isRunning,setIsRunning]=React.useState(false)
const timeRef=React.useRef()


React.useEffect(()=>{
  
 startTimer();   

return stopTimer;   
},[]);

const startTimer=()=>{
    if(isRunning){
        return
    }
    timeRef.current=setInterval(()=>{
        setTime((previous=>previous+1))
            },1000)
            setIsRunning(true)
}

const stopTimer=()=>{
    clearInterval(timeRef.current)
    setIsRunning(false)
}

  return (
    <div>
        <h1>Counter</h1>
        <h1>{time}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer