import { useState } from "react";
import React from "react";
import "./quiz.css";
import QuizQue from './QuizQue'

export default function Quiz() {
    const [questionIndex,setQuestionIndex]=useState(0);
    const [score,setScore]=useState(0);
    const present_question=QuizQue[questionIndex];
    const [result,setResult]=useState(false)
    
    const get_Choice=(index)=>{
        if(present_question.answer===index)
        {
            setScore(score+1);
        }
        
           const next=questionIndex+1;
           if(next<QuizQue.length)
           {
            setQuestionIndex(next)
           }
           else{
            setResult(true)
           }
           
        
    };

  return (
    <div className='quiz_box'>
        {result?<h3>{score}</h3>:( <div className='quiz_question'>
         {present_question.question}
      
        <div className="quiz_box_options">
            
        </div>
        <ul className="quiz_ul">{present_question.Option.map((option,i)=><li className="quiz_li"
          onClick={()=>get_Choice(i)}>{option}</li>)}
        
       
        </ul>
        </div>
      )}
       
    </div>
  )
}
