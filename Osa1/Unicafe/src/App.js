import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statisticsline = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
  const all = props.bad + props.neutral + props.good
  const average = (props.bad*(-1) + props.good) / all
  const positiveProportion = props.good / all

  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad} %</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average} </td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positiveProportion} %</td>
          </tr>
        </tbody>
      </table>

      {/*
      <Statisticsline text="good" value={props.good}/>
      <Statisticsline text="neutral" value={props.neutral}/>
      <Statisticsline text="bad" value={props.bad}/>
      <Statisticsline text="all" value={all}/>
      <Statisticsline text="average" value={average}/>
      <Statisticsline text="positive" value={positiveProportion}/>
  */}
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => {
    setGood(good +1 )
  }
  const setNeutralValue = () => {
    setNeutral(neutral +1 )
  }
  const setBadValue = () => {
    setBad(bad +1 )
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <br></br>
      <Button handleClick={setGoodValue} text="good"/>
      <Button handleClick={setNeutralValue}text="neutral"/>
      <Button handleClick={setBadValue} text="bad"/>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>


    </div>
  )
}

export default App