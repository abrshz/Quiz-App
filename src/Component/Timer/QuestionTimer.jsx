import React, { useEffect, useState } from 'react'

function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime , setRemainingTime] = useState(timeout);
    useEffect(()=>{
        setTimeout(onTimeout, timeout)
    },[timeout, onTimeout])
    useEffect(()=>{
        setInterval(()=>{
            setRemainingTime(preRemainingTime => preRemainingTime - 100)
        }, 100)
    }, [])
    
  return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
  )
}

export default QuestionTimer