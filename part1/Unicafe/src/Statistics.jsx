import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    if (good + neutral + bad === 0) return <p>No feedback given</p>
    else {
    return(
        <div>
        <h1>statistics</h1>
        <table>
            <tbody>
            <StatisticLine text = "good" value = {good}/>
            <StatisticLine text = "neutral" value = {neutral}/>
            <StatisticLine text = "bad" value = {bad}/>
            <StatisticLine text = "all" value = {all}/>
            <StatisticLine text = "average" value = {average}/>
            <StatisticLine text = "positive" value = {positive}/>
        </tbody>
        </table>
        </div>
    )
}
}

export default Statistics