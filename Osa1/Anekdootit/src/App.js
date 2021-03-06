import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const emptyArray = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState([...emptyArray])
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)

  const updateMostVoted = (props) => {
    if (votes[selected] > maxVotes) {
      setMostVoted(selected)
      setMaxVotes(votes[selected])
    } else {
    }
  }

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    setVotes({...votes, [selected]: votes[selected] + 1} );
    // Most voted anecdote is checked after every vote and updated with updateMostVoted if needed.
    updateMostVoted();
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={addVote} text="Vote"/>
      <Button handleClick={selectRandom} text="Next anecdote"/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
      <p>has {votes[mostVoted]} votes</p>
    </div>
  )
}

export default App