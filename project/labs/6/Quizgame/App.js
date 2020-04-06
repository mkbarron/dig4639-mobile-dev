import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Question from './components/Question';

constructor(props) {
  super(props);
  this.state = {
   counter: 0,
   questionId: 1,
   question: '',
   answerOptions: [],
   answer: '',
   answersCount: {
     nintendo: 0,
     microsoft: 0,
     sony: 0
   },
   result: ''
  };
}

export default function App() {
  render (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      <Question content="What is your favorite food?" />
      <Question content="Do you klearn better through seeing or hearing?" />
      <Question content="How ould you prefer to spend your weekend?" />
      <Question content="What's your favorite quarantine activity?" />
      <Question content="Would you prefer to travel by car, boat, or plane?" />
    </div>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 