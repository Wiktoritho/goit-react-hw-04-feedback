import React, { Component } from 'react';
import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import css from "./App.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positiveFeedback}
            messsage="There is no feedback"
          ></Statistics>
        </Section>
        </div>
    );
  }
}
