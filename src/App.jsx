import { useState } from 'react'
import './App.css'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import { Notification } from './components/Notification/Notification';

function App() {
  const [count, setCount] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );
  const[totalFeedback, setTotalFeedback] = useState(0);
  const [flag, setFlag] = useState(false);

  const reset = () =>{
    setFlag(false);
    setTotalFeedback(0);
    setCount({
    good : 0,
    neutral : 0,
    bad : 0
  })
    console.log(count.good, count.neutral, count.bad);      
  }

const updateFeedback = feedbackType =>{
    setCount({
      ...count,
      [feedbackType] : count[feedbackType] + 1,
    });
    setTotalFeedback(count.good + count.neutral + count.bad );
    setFlag (true);
    console.log(totalFeedback, 555, flag);
  };

  return (
    <>
  <h1> Sip Happens Café</h1>
  <p className='title' >  Please leave your feedback about our service by selecting one of the options below.  </p>
  <hr/>
    <Options 
       good = {count.good} 
       neutral = {count.neutral} 
       bad = {count.bad} 
       reset = {reset}
       totalFeedback = {totalFeedback}
       onClick={updateFeedback} />

    {flag ? < Feedback 
       good = {count.good} 
       neutral = {count.neutral} 
       bad = {count.bad}
       totalFeedback = {totalFeedback} /> : <Notification/>}
    </>
  )
}

export default App
