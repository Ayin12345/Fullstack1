import { useState } from 'react'
const Statistics = (props) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.total} </p>
      <p>Average: {(props.good - props.bad) / props.total}</p>
      <p>Positive: {props.good / props.total * 100} %</p>
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  
  const addNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  
  const addBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={addGood} text={"good"}/>
      <Button handleClick={addNeutral} text={"neutral"}/>
      <Button handleClick={addBad} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App