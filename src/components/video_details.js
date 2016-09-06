import React from 'react';

const VideoDetails = ({video}) => {
	if(!video) {
		return <div>Loading</div>
	}
	const videoId = video.id.videoId;
	const videoUrl = `https://youtube.com/embed/${videoId}`;

	return (
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoUrl} />
			</div>

			<div className="details">
				<div className="details-title">
				  {video.snippet.title}
				</div>

				<div className="details-description">
					{video.snippet.description}
				</div>
			</div>
		</div>
	);
}

export default VideoDetails;