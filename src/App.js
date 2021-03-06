import './App.css';
import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        this.setState(state => ({
            isToggleOn : !state.isToggleOn
        }));
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}
export default Toggle;
