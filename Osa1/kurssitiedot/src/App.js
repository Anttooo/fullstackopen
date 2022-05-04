const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// Pass to the Part-component the objectives
const Content = ({parts}) => {
  return (
    <>
      <Part name={parts[0].name} exercise={parts[0].exercises}/>
      <Part name={parts[1].name} exercise={parts[1].exercises}/>
      <Part name={parts[2].name} exercise={parts[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Total = ({parts}) => {
  // calculate the sum of the exercises using reduce
  const sum = parts.reduce((accumulator, parts) => {
    return accumulator + parts.exercises;
  }, 0);

  return (
    <>
      <p> Number of exercises {sum} </p>
    </>
  )
}

const App = (props) => {
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App