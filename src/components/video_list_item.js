import React from 'react';

const VideoListItem = ({video}) => {
	return (
		<li className="video-list-item">
			{video.snippet.title}
		</li>
	);
}

export default VideoListItem;