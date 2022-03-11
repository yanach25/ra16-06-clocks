import './CloclCreator.css'
import {useState} from "react";
import PropTypes from "prop-types";

function ClockCreator(props) {
    const [name, setName] = useState('');
    const [zone, setZone] = useState('');

    const createClock = () => {
        props.onCreateClock(name, zone);
        setName('');
        setZone('');
    }

    return (
        <div className="clock-creator">
            <label>
                Название
                <input value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Временная зона
                <input type="number" value={zone} onChange={(event) => setZone(event.target.value)}/>
            </label>
            <button disabled={!name || zone==='' || zone < -12 || zone > 14} onClick={createClock}>Добавить</button>
        </div>
    )
}

ClockCreator.propTypes = {
    onCreateClock: PropTypes.func,
}

export default ClockCreator;
