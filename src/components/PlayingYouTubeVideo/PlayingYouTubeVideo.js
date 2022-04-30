const PlayingYouTubeVideo = ({ videoId }) => {
  if (!videoId) {
    // console.log("ddd");
    return <div></div>;
  }

  return (
    <div className="video-responsive">
      <iframe
        width="300"
        height="240"
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
