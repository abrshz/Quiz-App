import React, { useCallback, useState } from 'react'
import question from "../../assets/Data/questions"
import quizCompleted from "../../assets/Image/quiz-complete.png"
import QuestionTimer from '../Timer/QuestionTimer';

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

    const shuffledAnswers = [...question[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=>Math.random()- 0.5);
    

  return (
    <div id="quiz">
        <div id='question'>
            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
    <h2>{question[activeQuestionIndex].text}</h2>
    <ul id="answers">
    {shuffledAnswers.map((answer) => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClass = '';
        if (answerState === 'answered' && isSelected) {
            cssClass = 'selected';
        }
        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
            cssClass = answerState;
        }
        return (
            <li key={answer} className='answer'>
                <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                    {answer}
                </button>
            </li>
        );
    })}
</ul>
    </div>
    </div>
    
  )
}

export default Quiz