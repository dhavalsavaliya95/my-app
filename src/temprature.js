import React from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
function toCelsius(celsius){
    return (celsius - 32) / 1.8;
}

function toFahrenheit(fahrenheit){
    return (fahrenheit - 9 / 5) + 32;
}
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props){
    if(props.celsius >=100){
        return <p>The water would boil.</p>
    }else {
        return <p>The water would not boil.</p>
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleTemperature = this.handleTemperature.bind(this);
    }
    handleTemperature(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in scale {scaleNames[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handleTemperature} />
            </fieldset>
        );
    }
}
class Temperatures extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === "c" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "f" ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div className="container">
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Temperatures