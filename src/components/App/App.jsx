import { Component } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
    [option]: prevState[option] + 1,
  }));
}

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
   const count = (good / (good + bad + neutral)) * 100;
    return Math.round(count) || 0;
  }

  render() {
    const total  = this.countTotalFeedback();
    return (
      
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        {total === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
