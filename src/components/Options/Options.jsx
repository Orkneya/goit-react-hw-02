import s from './Options.module.css'

const Options = ({good, neutral, bad, reset, totalFeedback, onClick}) => {

  return (
      <div className={s.buttons}>
        <button className={s.btn} onClick = {()=> onClick('good')}> Good : {good} </button>
        <button className={s.btn} onClick = {()=> onClick('neutral')}>Neutral : {neutral} </button>
        <button className={s.btn} onClick = {()=> onClick('bad')}> Bad : {bad} </button>
        {totalFeedback && <button className={s.btn} onClick = {reset}> Reset </button>}
    </div>
  )
}

export default Options