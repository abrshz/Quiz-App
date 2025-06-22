import React from 'react'
import QuestionTimer from '../Timer/QuestionTimer'
import Answers from '../Answers/Answers'
function Question({questionText, answers , onSelectAnswer , selectedAnswer , answerState , onSkipAnswer }) {
  return (
      <div id='question'>
            <QuestionTimer  
            timeout={10000} 
            onTimeout={onSkipAnswer} />
    <h2>{questionText}</h2>
    <Answers 
    answers={answers}
    selectedAnswer={selectedAnswer}
answersState={answerState}
onSelect={onSelectAnswer}
    />

    </div>
  )
}

export default Question