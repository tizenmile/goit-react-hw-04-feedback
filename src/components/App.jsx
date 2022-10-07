import React, { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  feedBackCount = (event) => {
    switch (event.currentTarget.textContent) {
      case "Good":
        this.setState({ good: this.state.good + 1 })
        break;
      case "Neutral":
        this.setState({ neutral: this.state.neutral + 1 })
        break;
      case "Bad":
        this.setState({ bad: this.state.bad + 1 })
        break;
      default:
        console.log("Something wrong...");
        break;
    }
  }

  countTotalFeedback = (total) => {
    const { good, neutral, bad } = this.state;
    return total = good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (positivePercentage) => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    positivePercentage = good * 100 / total;
    if (isNaN(positivePercentage)) return 0;
    return positivePercentage.toFixed();
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.feedBackCount} onLeaveFeedback={this.onLeaveFeed} />
        {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <h2>No feedback given</h2>}

      </div>);
  }
}

export { App }