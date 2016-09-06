import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ""
		}
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term} 
					onChange={evt => this.onInputChange(evt.target.value)}/>
			</div>
		);
	}
}

export default SearchBar;