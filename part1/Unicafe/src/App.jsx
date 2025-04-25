import { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good + neutral + bad) / 3).toFixed(2)
  const positive = (good / (good + neutral + bad)*100).toFixed(2)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}
        positive = {positive}
      />
    </div>
  )
}

export default App