import React, { useCallback, useState } from 'react'
import question from "../../assets/Data/questions"
import quizCompleted from "../../assets/Image/quiz-complete.png"
import Question from '../Question/Question';


function Quiz() {
    
    const [answerState , setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length :  userAnswers.length - 1;    

    const quizIsComplete = activeQuestionIndex === question.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers((preUserAnswers)=>{
            return [...preUserAnswers, selectedAnswer];
        });
    setTimeout(()=>{
        if (selectedAnswer === question[activeQuestionIndex].answers[0]){
            setAnswerState('correct');
        } else {
            setAnswerState('wrong')
        }
        setTimeout (()=>{
            setAnswerState('');
        }, 2000)
    }, 1000)
    }, [activeQuestionIndex]);

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
        questionText={question[activeQuestionIndex].text}
        answers={question[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
    
     />
      
    </div>
    
  )
}

export default Quiz