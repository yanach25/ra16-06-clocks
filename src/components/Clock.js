import React from "react";
import './Clock.css';
import PropTypes from "prop-types";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.data.name, time: ''};
        this.removeClock = this.removeClock.bind(this);
    }
    componentDidMount() {
        this.tick();
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        const now = new Date();
        now.setTime( now.getTime() + now.getTimezoneOffset()*60*1000 + this.props.data.zone * 60 * 60 * 1000 );
        let hour = now.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let min = now.getMinutes();
        if (min < 10) {
            min = `0${min}`;
        }
        let sec = now.getSeconds();
        if (sec < 10) {
            sec = `0${sec}`;
        }
        this.setState((prev) => ({
            ...prev,
            time: {hour, min, sec},
        }))
    }

    removeClock() {
        this.props.onClearClock(this.state.name);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-name">{this.state.name}</div>
                <div className="clock-value">{this.state.time.hour}:{this.state.time.min}:{this.state.time.sec}</div>
                <div className="clock-remover" onClick={this.removeClock}>x</div>
            </div>
        )
    }
}

Clock.propTypes= {
    data: PropTypes.shape({
        name: PropTypes.string,
        zone: PropTypes.string,
    }),
    onClearClock: PropTypes.func,
}

export default Clock;
