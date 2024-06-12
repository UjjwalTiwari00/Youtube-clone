import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../../utils/Constans';
import VideosBox from './VideosBox';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function VideoContainer() {

  const isMenuOpen=useSelector((store)=>store.sideBar.value)

    const [videos,SetVideos]=useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos=async ()=>{
        try{
          const data= await fetch(YOUTUBE_API)
        const DATAs=await data.json()
        // console.log(DATAs.items);
        SetVideos(DATAs.items);
        }
        catch(e){
          console.log(e);
        }
    }
  return (
    <div className={`ml-[60px] flex flex-wrap justify-center  ${!isMenuOpen?"":"ml-[280px]"}` }>
        {
          videos.map((data)=>{
            return(
                data ?<Link key={data.id} to={"/watch?v="+data.id }><VideosBox key={data.id} info={data}/></Link> :"loading...." 
            )
          }) 
          }
       
    </div>
   
  )
}

export default VideoContainer