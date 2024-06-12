import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Slideoff } from "../../SliceComponents/Side_slice";
import { useSearchParams } from "react-router-dom";
import LiveChats from "./LiveChats";
import Comments_container from "./Comments_container";
import { YOUTUBE_API, YOUTUBE_VIDEO_WATCH_API } from "../../utils/Constans";
import { formatCompactNumber } from "../../utils/helper";
import likeIcon from "../assets/like.svg";
import disLikeIcon from "../assets/dislike.svg";
import shareIcon from "../assets/share.svg";
import downloadIcon from "../assets/download.svg";
import moreIcon from "../assets/more.svg";

function WatchPage() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  const [ChannelData, SetChannelData] = useState();
  const [channelInfo, SetChannelInfo] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    DataFetch();
    console.log("this is state data");
    console.log(ChannelData);

    dispatch(Slideoff());
  }, []);

  const DataFetch = async () => {
    const data = await Promise.all([
      fetch(YOUTUBE_VIDEO_WATCH_API + id),
      fetch(YOUTUBE_API),
    ]);
    const Json = await data[0].json();
    const recVideoJson = await data[1].json();
    console.log("this is channel data");
    console.log(recVideoJson.items);
    SetChannelInfo(recVideoJson.items);
    SetChannelData(Json?.items[0]?.snippet);
  };
  return (
    <div className="mt-14 flex flex-col w-full">
      <div className="px-3 mt-3 flex">
        <div>
          <iframe
            className="rounded-md"
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChats />
        </div>
      </div>
      <div className="font-medium text-[18px] ml-5">{ChannelData?.title}</div>
      <div className="flex justify-between w-[1100px] ml-5">
        <div className="flex justify-around items-center">
          <div className="mt-2 flex justify-between">
            <div>
              <img
                className="rounded-full w-10 h-10 mt-2 mr-2 "
                src={ChannelData?.thumbnails?.default?.url}
              ></img>
            </div>
            <ul className="flex flex-col justify-center ml-2">
              <li className="font-bold text-[16px]">
                {ChannelData?.channelTitle}
              </li>
              <li>{formatCompactNumber(ChannelData?.statistics?.viewCount)}</li>
            </ul>
          </div>
          <button className="bg-black rounded-full h-10 p-2 m-3 text-white">
            Subscribe
          </button>
        </div>
        <div className="flex">
          <button className="bg-gray-100 rounded-l-full px-4 hover:bg-gray-200  h-10 p-2">
            <img alt="likeBtn" className="inline-block" src={likeIcon} /> 65K
          </button>
          <button className="bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200  h-10 p-2 ">
            <img alt="dislikeBtn" className="inline-block" src={disLikeIcon} />
          </button>
          <button className="bg-gray-100 rounded-full  h-10 hover:bg-gray-200 ml-2 p-2">
            <img alt="shareBtn" className="inline-block" src={shareIcon} />{" "}
            Share
          </button>
          <button className="bg-gray-100 rounded-full h-10 p-2 ml-2 hover:bg-gray-200">
            <img
              alt="downloadBtn"
              className="inline-block"
              src={downloadIcon}
            />{" "}
            Download
          </button>
          <button className="bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200">
            <img alt="moreBtn" className="inline-block" src={moreIcon} />
          </button>
        </div>
      </div>
      <div>
        {" "}
        <Comments_container />
      </div>
    </div>
  );
}

export default WatchPage;
