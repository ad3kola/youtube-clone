"use client";
import VideoItem from "./VideoItem";
import { GET_YOUTUBE_VIDEOS } from "@/utils/getYoutubeVideos";

function VideoFeed() {

  return (
    <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-7 scrollbar-thin scrollbar-thumb-neutral-800 hover:scrollbar-thumb-neutral-700 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {GET_YOUTUBE_VIDEOS.map((video) => (
        <VideoItem
          key={video.id.videoId}
          channelName={video.snippet.channelTitle}
          videoTitle={video.snippet.title}
          videoReleaseDate={video.snippet.publishedAt}
          videoThumbnail={video.snippet.thumbnails.high.url}
        />
      ))}
    </div>
  );
}

export default VideoFeed;
