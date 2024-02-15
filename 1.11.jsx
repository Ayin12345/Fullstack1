import { useState } from 'react'
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <br></br>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h3>Statistics</h3>
        <table>
          <tbody>
            <StatisticLine text="good" value ={props.good} />
            <StatisticLine text="neutral" value ={props.neutral} />
            <StatisticLine text="bad" value ={props.bad} />
            <StatisticLine text="all" value ={props.total} />
            <StatisticLine text="average" value ={(props.good - props.bad) / props.total} />
            <StatisticLine text="positive" value ={props.good / props.total * 100} mark="%"/>
          </tbody>
        </table>
      </div>
    )
  }
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.mark}</td>
    </tr>
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