import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAdu4lwr87ZmW6hhT5-Igcm373xYUjYoKI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		}

		YTSearch({key:API_KEY, term: "jimi hendrix"}, videos => {
			this.setState({videos});
		})
	}

	render() {
		return (
			<div>
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));