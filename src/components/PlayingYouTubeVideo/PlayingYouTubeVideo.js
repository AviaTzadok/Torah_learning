const PlayingYouTubeVideo = ({ videoId }) => {
  if (!videoId) {
    // console.log("ddd");
    return <div></div>;
  }

  return (
    <div className="video-responsive">
      <iframe
        width="400"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        // onended="onPlayerStateChange()"
      />
    </div>
  );
};
export default PlayingYouTubeVideo;
