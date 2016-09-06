import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos}) => {
	const list = videos.map(video => <VideoListItem video={video} />);

	return (
		<ul className="video-list list-group col-md-4">
			{list}
		</ul>
	);
}

export default VideoList;