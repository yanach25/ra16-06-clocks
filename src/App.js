import './App.css';
import ClockCreator from "./components/ClockCreator";
import {useState} from "react";
import Clock from "./components/Clock";

function App() {
    const [clocks, setClocks] = useState([]);
    const onCreateClock = (name, zone) => {
        const clockIndex = clocks.findIndex((item) => item.name === name.trim());
        if (clockIndex >= 0) {
            return;
        }

        setClocks((prev) => [...prev, {name, zone}]);
    }
    const onClearClock = (name) => {
        setClocks((prev) => [...prev.filter((item) => item.name !== name)])
    }
    const clocksEls = clocks.map((clock) => (<Clock onClearClock={onClearClock} key={clock.name} data={clock}/>))

    return (
        <div className="App">
            <ClockCreator
                onCreateClock={onCreateClock}
            />
            <div className="clocks-wrapper">
                {clocksEls}
            </div>
        </div>
    );
}

export default App;
