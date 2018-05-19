import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (<button onClick={props.handler}>{props.text}</button>)
}

const Anecdote = (props) => {
    return (
        <div>
            <div>{props.anecdote}</div>
            <div>this anecdote has {props.votes} votes</div>
        </div>
    )
}

const MostPopularAnecdote = (props) => {
    return (
        <div>
            <h1>anecdote with most votes</h1>
            <div>{props.mostPopular.anecdote}</div>
            <div>has {props.mostPopular.votes} votes</div>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: props.anecdotes.map(() => 0)
        }
    }

    randomAnecdote = () => this.setState({selected: Math.floor(Math.random() * Math.floor(this.props.anecdotes.length))})
    voteAnecdote = () => {
        const votes = [...this.state.votes];
        votes[this.state.selected] += 1;

        this.setState({votes})
    }

    mostPopularAnecdote() {
        const indexOfMostPopular = this.state.votes.reduce((currentMaxIdx, val, index, array) => val > array[currentMaxIdx] ? index : currentMaxIdx, 0)

        return {
            anecdote: this.props.anecdotes[indexOfMostPopular],
            votes: this.state.votes[indexOfMostPopular]
        }
    }

    render() {
        return (
            <div>
                <Anecdote anecdote={this.props.anecdotes[this.state.selected]} votes={this.state.votes[this.state.selected]}/>
                <Button text="new anecdote" handler={this.randomAnecdote} />
                <Button text="vote" handler={this.voteAnecdote} />
                <MostPopularAnecdote mostPopular={this.mostPopularAnecdote()}/>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)