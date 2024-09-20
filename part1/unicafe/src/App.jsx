import { useState } from "react"

const Statistics = ({isStats, good, neutral, bad, all, average,positive}) =>{
  return(
    <div>
      <h1>Statistics:</h1>
      {
      isStats ?
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </div>
        : 
        <p>No feedback given</p>
      }
    </div>
  )
}

const StatisticLine = ({text, value}) => <p>{text}: {value}</p>

const Button = ({clickHandler, bText}) => {
  return(
    <button type="button" onClick={clickHandler}>{bText}</button>
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

  const isStats = stats.all != 0

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandler={handleClickGood} bText = "Good" />
      <Button clickHandler={handleClickNeutral} bText = "Neutral" />
      <Button clickHandler={handleClickBad} bText = "Bad" />
      <Statistics isStats={isStats} good={stats.good} neutral={stats.neutral} bad={stats.bad} all={stats.all} average={stats.average} positive={stats.positive}/>
    </div>
  )
}

export default App
