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

  goodFeed = () =>
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

  neutralFeed = () =>
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));

  badFeed = () =>
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count) || 0;
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.goodFeed}
            neutral={this.neutralFeed}
            bad={this.badFeed}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
