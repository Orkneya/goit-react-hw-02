import { useState, useEffect } from 'react'
import './App.css'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import { Notification } from './components/Notification/Notification';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);

  const [count, setCount] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('count'));
    
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType==="reset"){
      setCount({
        good : 0,
        neutral : 0,
        bad : 0
      })
    } else {
    setCount(prevCount => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1
    }));
    }  
  };

  let positiveFeedback = 0;
  const totalFeedback = count.good + count.neutral + count.bad;  
   (totalFeedback >0) ? (positiveFeedback = Math.round((count.good / totalFeedback) * 100)) : (positiveFeedback = 0);
  
  return (
    <>
  <h1> Sip Happens Café</h1>
  <p className='title' >  Please leave your feedback about our service by selecting one of the options below.  </p>
  <hr/>
    <Options 
       good = {count.good} 
       neutral = {count.neutral} 
       bad = {count.bad}
       totalFeedback = {totalFeedback} 
       onClick={updateFeedback} />

    {totalFeedback ? < Feedback 
       good = {count.good} 
       neutral = {count.neutral} 
       bad = {count.bad}
       positiveFeedback = {positiveFeedback}
       totalFeedback = {totalFeedback} /> : <Notification/>
       }
    </>
  )
}

export default App
