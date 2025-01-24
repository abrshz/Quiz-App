import React, { useState } from 'react'
import question from "../../assets/Data/questions"
import quizCompleted from "../../assets/Image/quiz-complete.png"
import QuestionTimer from '../Timer/QuestionTimer';

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =userAnswers.length;    

    const quizIsComplete = activeQuestionIndex === question.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((preUserAnswers)=>{
            return [...preUserAnswers, selectedAnswer];
        })
    }
    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleted} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...question[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=>Math.random()-0.5);
    

  return (
    <div id="quiz">
        <div id='question'>
            <QuestionTimer timeout={10000} onTimeout={()=> handleSelectAnswer(null)} />
    <h2>{question[activeQuestionIndex].text}</h2>
    <ul id="answers">
       {shuffledAnswers.map((answer)=>(
        <li key={answer} className='answer'>
            <button onClick={() =>handleSelectAnswer(answer)}>{answer}</button>
        </li>
        
       ))} 
    </ul>
    </div>
    </div>
    
  )
}

export default Quiz