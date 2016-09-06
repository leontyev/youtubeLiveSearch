import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdu4lwr87ZmW6hhT5-Igcm373xYUjYoKI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.youtubeSearch("jimi hendrix");
	}

	youtubeSearch(term) {
		YTSearch({key:API_KEY, term:term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		})
	}

	render() {
		const youtubeSearch = _.debounce((term => this.youtubeSearch(term)),1000);
		return (
			<div>
				<SearchBar onTermChange={youtubeSearch}/>
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={video => this.setState({selectedVideo: video})}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));