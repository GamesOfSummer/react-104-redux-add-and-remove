import React from 'react';
import RatePerDay from './RatePerDay';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="my-5">
                    <label htmlFor="customRange1">Per hour amount :: </label>
                    <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                        min="1"
                        max="300"
                        onChange={this.handleChange}
                    />

                    <label>$ {this.state.value} per hour</label>
                </div>

                <RatePerDay value={this.state.value} />
            </div>
        );
    }
}

export default Slider;
