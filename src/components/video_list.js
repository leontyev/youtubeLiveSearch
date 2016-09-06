import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
	const list = videos.map(video => {
		return (
			<VideoListItem 
				key={video.etag} 
				video={video} 
				onVideoSelect={onVideoSelect}/>
		)
	});

	return (
		<ul className="video-list list-group col-md-4">
			{list}
		</ul>
	);
}

export default VideoList;