const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
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
    }

return (
  <div>
    <Header course={course} />
    <Content parts={course} />
    <Total parts={course} />
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
    <h1>{props.course.name}</h1>
  </div>
)
}

const Content = (props) => {
return (
  <div>
    <Part part={props.parts.parts[0].name} exercise={props.parts.parts[0].exercises} />
    <Part part={props.parts.parts[1].name} exercise={props.parts.parts[1].exercises} />
    <Part part={props.parts.parts[2].name} exercise={props.parts.parts[2].exercises} />
  </div>
)
}

const Total = (props) => {
return (
  <div>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
  </div>
)
}

export default App
