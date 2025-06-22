import React, { useCallback, useState } from 'react'
import question from "../../assets/Data/questions"
import quizCompleted from "../../assets/Image/quiz-complete.png"
import Question from '../Question/Question';


function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =  userAnswers.length;  

    const quizIsComplete = activeQuestionIndex === question.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((preUserAnswers)=>{
            return [...preUserAnswers, selectedAnswer];
        });
    }, []);

const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer])



    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleted} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

  return (
    <div id="quiz">
        <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
     />
      
    </div>
    
  )
}

export default Quiz