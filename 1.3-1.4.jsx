const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
    <p>
      <strong>Name:</strong> {props.part}
    </p>
    <p>
      <strong>Number:</strong> {props.exercise}
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

const Content = (props) => {
  console.log(props[2].exercises)
  return (
    <div>
      <Part part={props[0].name} exercise={props[0].exercises} />
      <Part part={props[1].name} exercise={props[1].exercises} />
      <Part part={props[2].name} exercise={props[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let number = exercises
  return (
    <div>
      <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    </div>
  )
}

export default App
