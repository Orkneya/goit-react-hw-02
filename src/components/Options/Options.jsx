import s from './Options.module.css'

const Options = ({good, neutral, bad, onClick}) => {
  return (
    <div>
      {/* const totalFeedback = {good} + {neutral} + {bad}; */}
      {/* console.log(totalFeedback); */}

      {/* console.log({onClick(good)}); */}
      
      <button onClick = {()=> onClick('good')}> Good : {good} </button>
      <button onClick = {()=> onClick('neutral')}>Neutral : {neutral} </button>
      <button onClick = {()=> onClick('bad')}> Bad : {bad} </button>
      {/* <button onClick = {()=> onClick(raset)}> Reset : {raset} </button> */}
    </div>
  )
}

export default Options