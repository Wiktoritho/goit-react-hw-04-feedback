import { useState } from 'react';
import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import css from './App.module.css';

const INITIAL_STATS = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
};

export const App = () => {
  const [stats, setStats] = useState(INITIAL_STATS);

  const handleClick = kind => {
    stats[kind] = stats[kind] + 1;
    stats.total += 1;
    setStats({ ...stats });
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((stats.good / stats.total) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          onLeaveFeedback={kind => handleClick(kind)}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={stats.good}
          neutral={stats.neutral}
          bad={stats.bad}
          total={stats.total}
          positivePercentage={countPositiveFeedbackPercentage()}
          messsage="There is no feedback"
        ></Statistics>
      </Section>
    </div>
  );
};
