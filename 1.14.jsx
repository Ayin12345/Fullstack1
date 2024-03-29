import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

    const [selected, setSelected] = useState(0);

    const votes = new Array(8).fill(0);
    const [points, setPoints] = useState(votes);

    const [maxIndex, setMaxIndex] = useState(0);

    const handleClick = (action) => () => {
        if (action === "vote") {
            const copy = [...points];
            copy[selected] += 1;
            setPoints(copy);
            setMaxIndex(copy.indexOf(Math.max(...copy)));
        } else if (action === "next") {
            setSelected(Math.floor(Math.random() * anecdotes.length));
        }
    }


    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]}</p>
            <button onClick={handleClick("vote")}>Vote</button>
            <button onClick={handleClick("next")}>Next Anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[maxIndex]}</p>
            <p>has {points[maxIndex]}</p>
        </div>
    )
}


export default App