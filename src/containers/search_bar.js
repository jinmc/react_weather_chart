import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // we need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="get a five day forecast in your fav city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);