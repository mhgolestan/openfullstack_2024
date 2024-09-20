import { useState } from "react"

const Statistics = ({good, neutral, bad, all, average,positive}) =>{
  return(
    <div>
      <h1>Statistics:</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}:</p>
      <p>all: {all}:</p>
      <p>average: {average}:</p>
      <p>positive: {positive}:</p>
    </div>
  )
}



const App = () => {

  const [stats, setStats] = useState({
    good:0,
    bad:0,
    neutral:0,
    all:0,
    average:0,
    positive:0,
  })

  const handleClickGood = () =>{ 
    const newStats = {
      ...stats, 
      good: stats.good + 1,
      all: stats.all + 1,
      average: (stats.good - stats.bad) / stats.all,
      positive: stats.good / stats.all
    }
    setStats(newStats)
  }

  const handleClickNeutral = () => {
    const newStats = {
      ...stats, 
      neutral: stats.neutral + 1,
      all: stats.all + 1,
      average: (stats.good - stats.bad) / stats.all,
      positive: stats.good / stats.all
    }
    setStats(newStats)
  }

  const handleClickBad = () => {
    const newStats = {
      ...stats, 
      bad: stats.bad + 1,
      all: stats.all + 1,
      average: (stats.good - stats.bad) / stats.all,
      positive: stats.good / stats.all
    }
    setStats(newStats)
  }


  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>

      <Statistics good={stats.good} neutral={stats.neutral} bad={stats.bad} all={stats.all} average={stats.average} positive={stats.positive}/>
    </div>
  )
}

export default App
