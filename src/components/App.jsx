import React, { useState } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedBackCount = (event) => {
    switch (event.currentTarget.textContent) {
      case "Good":
        setGood(good + 1)
        break;
      case "Neutral":
        setNeutral(neutral + 1)
        break;
      case "Bad":
        setBad(bad + 1)
        break;
      default:
        console.log("Something wrong...");
        break;
    }
  }

  const countTotalFeedback = (total) => {
    return total = good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = (positivePercentage) => {
    let total = good + neutral + bad;
    positivePercentage = good * 100 / total;
    if (isNaN(positivePercentage)) return 0;
    return positivePercentage.toFixed();
  }


  const total = countTotalFeedback()
  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={feedBackCount}  />
      {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage()} /> : <h2>No feedback given</h2>}

    </div>);

}

export { App }