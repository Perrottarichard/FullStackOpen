import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
  return (
    <div>
      <tr>
        <td style={{ width: 200, height: 30 }}><h4>{props.type}</h4></td>
        <td style={{ width: 200, height: 30, textAlign: 'center' }}><h4>{props.value}</h4></td>
      </tr>
    </div>
  )
}
const Button = (props) => {
  return (
    <div>
      <button style={{ backgroundColor: "#0d8018", color: '#ffffff' }} onClick={props.goodJob}>Good</button>
      <button style={{ backgroundColor: "#0335fc", color: '#ffffff' }} onClick={props.neutralJob}>Neutral</button>
      <button style={{ backgroundColor: "#fc1303", color: '#ffffff' }} onClick={props.badJob}>Bad</button>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodJob = () => {
    setGood(good + 1);
  }
  const badJob = () => {
    setBad(bad + 1);
  }
  const neutralJob = () => {
    setNeutral(neutral + 1);
  }
  const all = good + bad + neutral;
  const average = (good - bad) / 2;
  const positive = good / all;

  return (
    <div>
      <div>
        <h1>Give Feedback:</h1>
        <Button goodJob={goodJob} badJob={badJob} neutralJob={neutralJob} />
      </div>
      <br />
      {(all > 0) ?
        <table style={{ textAlign: 'left', tableLayout: 'auto', width: 400, height: 600 }}>
          <tbody>
            <Statistic type={'Good'} value={good} />
            <Statistic type={'Neutral'} value={neutral} />
            <Statistic type={'Bad'} value={bad} />
            <Statistic type={'All'} value={all} />
            <Statistic type={'Average'} value={average} />
            <Statistic type={'Positive'} value={positive} />
          </tbody>
        </table> : <h3>No feedback given</h3>
      }
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

