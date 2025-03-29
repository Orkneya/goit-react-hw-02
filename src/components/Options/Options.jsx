import s from './Options.module.css'

const Options = ({good, neutral, bad, totalFeedback , onClick}) => {

  return (
      <div className={s.buttons}>
        <button className={`${s.btn} ${s['btn-good']}`} onClick = {()=> onClick('good')}> Good : {good} </button>
        <button className={`${s.btn} ${s['btn-neutral']}`} onClick = {()=> onClick('neutral')}>Neutral : {neutral} </button>
        <button className={`${s.btn} ${s['btn-bad']}`} onClick = {()=> onClick('bad')}> Bad : {bad} </button>
        {(totalFeedback > 0) && <button className={s.btn} onClick = {()=> onClick('reset')}> Reset </button>}
    </div>
  )
}

export default Options