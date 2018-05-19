import React from 'react';
import ReactDOM from 'react-dom';

const Button  = (props) => {
    return (
        <button onClick={props.handler}>{props.text}</button>
    )
}

const Statistic = (props) => (<tr><td>{props.text}</td><td>{props.value}</td></tr>)

const Statistics = (props) => {
    const {good, neutral, bad} = props

    const average = () => (good - bad) / (good + neutral + bad)
    const percentPositive = () => (good / (good + neutral + bad) * 100)

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>statistiikka</h1>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>statistiikka</h1>
                <table>
                    <tbody>
                    <Statistic text="hyvä" value={good}/>
                    <Statistic text="neutraali" value={neutral}/>
                    <Statistic text="huono" value={bad}/>
                    <Statistic text="keskiarvo" value={average()}/>
                    <Statistic text="positiivisia" value={percentPositive() + "%"}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    incrementValue = (field, previousState) => {
        return () => this.setState({[field]: previousState[field] + 1})
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button text="hyvä" handler={this.incrementValue("good", this.state)} />
                <Button text="neutraali" handler={this.incrementValue("neutral", this.state)} />
                <Button text="huono" handler={this.incrementValue("bad", this.state)} />
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
