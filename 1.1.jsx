const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
    <p>
      <strong>Name:</strong> {props.part1}
    </p>
    <p>
      <strong>Number:</strong> {props.exercise1}
    </p>
    <br></br>
      <p>
      <strong>Name:</strong> {props.part2}
    </p>
    <p>
      <strong>Number:</strong> {props.exercise2}
    </p>
    <br></br>
      <p>
      <strong>Name:</strong> {props.part3}
    </p>
    <p>
      <strong>Number:</strong> {props.exercise3}
    </p>
    <br></br>
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

export default App
