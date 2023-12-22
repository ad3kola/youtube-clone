import Image from "next/image";
import React from "react";
type VideoItemProps = {
  channelName: string;
  videoTitle: string;
  videoReleaseDate: any;
  videoThumbnail: string;
};

function VideoItem({
  channelName,
  videoTitle,
  videoReleaseDate,
  videoThumbnail,
}: VideoItemProps) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer group">
      <img
        src={videoThumbnail}
        alt={videoThumbnail}
        className="block rounded-3xl w-full object-cover h-60 group-hover:rounded-none group-hover:duration-200"
      />
      <div className="flex gap-2">
        <img
          src={videoThumbnail}
          alt={videoThumbnail}
          className="block rounded-full object-fit w-10 h-10"
        />
        <div className="flex flex-col">
          <h2 className="text-white text-base capitalize font-semibold">
            {videoTitle}
          </h2>
          <h2 className="text-gray-200 text-sm mt-1">{channelName}</h2>
          <h2 className="text-gray-200 text-sm mt-1">
            1.8M views . 3 years ago
          </h2>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
