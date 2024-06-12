import React, { useEffect, useState } from 'react'
import { SEARCH_VIDEOS_API } from '../../utils/Constans';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SuggestionList() {
    const [ListData,SetListData]=useState([]);
    const TypeNamed=useSelector((state)=>state.sideBar.name);
    
    useEffect(()=>{
      getSearchedVideo()
    },[TypeNamed])

    const getSearchedVideo=async ()=>{
      const data= await fetch(SEARCH_VIDEOS_API+TypeNamed)
      const SearchVideoJson=await data.json()
      SetListData(SearchVideoJson?.items);
      console.log("this is list data");
      console.log(ListData);
    }
   
  return (
    <div className='px-3 col-span-11 mt-10'>
    <div className='flex flex-col px-3  items-center'>
        <div className='p-2 m-2'>
            {ListData?.map(video =>
                <Link key={video?.id?.videoId} to={'/watch?v=' + video?.id?.videoId} >
                    <div className='px-2 m-3 flex'>
                        <img className='rounded-lg w-[400px] h-[210px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                        <ul className='flex flex-col justify-start ml-5 w-96'>
                            <li className=' py-2 text-2xl '>{video?.snippet?.title}</li>
                            <li className='text-gray-500 text-[16px]'>{video?.snippet?.channelTitle}</li>
                            <li className='text-gray-500 text-[16px]'>100 views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                            <li className='text-gray-500 mt-2 text-[15px]'>{video?.snippet?.description}</li>
                        </ul>
                    </div>
                </Link>
            )}
        </div>
    </div>
</div>
  )
}

export default SuggestionList;