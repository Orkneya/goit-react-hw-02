import { useState } from 'react'
import './App.css'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {
  const [count, setCount] = useState(
    {
      good: 1,
      neutral: 0,
      bad: 0
    }
  );

const updateFeedback = feedbackType =>{
    setCount({
      ...count,
      [feedbackType] : count[feedbackType] + 1,
    });
  };

  return (
    <>
  <h1> Sip Happens Café</h1>
  <p className='title' >  Please leave your feedback about our service by selecting one of the options below.  </p>
  <button onClick = {()=>{updateFeedback('good')}} >Hi  {count.good} </button>
  {/* <button onClick = {handleValu}> Hello: {valyes} </button> */}
  <hr/>
    <Options 
       good = {count.good} 
       neutral = {count.neutral} 
       bad = {count.bad} 
       onClick={updateFeedback} />
    <Feedback 
       good = {count.good} 
       neutral = {count.neutral} 
       bad = {count.bad} 
       onClick={updateFeedback} />
    </>
  )
}

export default App
