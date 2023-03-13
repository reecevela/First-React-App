import './Timer.css';
import React from "react";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
            timeInput: 5
        }
        this.startTimer = this.startTimer.bind(this);
        this.handleInputTimeChange = this.handleInputTimeChange.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        this.setState({
            timeLeft: this.state.timeInput
        });
        this.timeInterval = setInterval(
            () => this.tick(),
            10
        );
    }

    tick() {
        let time = this.state.timeLeft;
        const interval = 0.01;
        if (time <= 0) {
            clearInterval(this.timeInterval);
            return;
        }
        time -= interval; 
        time = Math.round(time * 100) / 100
        this.setState({
            timeLeft: time
        });
    }

    handleInputTimeChange(event) {
        this.setState({
            timeInput: event.target.value
        })
    }

    stopTimer() {
        clearInterval(this.timeInterval);
    }

    render() {
        return (
            <div className="timer">
                <h1>Time Remaining:</h1>
                <h2 class="time">{this.state.timeLeft} seconds</h2>
                <p>Enter number of seconds for timer:</p>
                <input 
                    type="number" 
                    id="timeInput"
                    onChange={this.handleInputTimeChange}
                />
                <div className="buttons">
                    <button onClick={this.startTimer}>Start Timer</button>
                    <button onClick={this.stopTimer}>Stop Timer</button>
                </div>
            </div>
        )
    }
}