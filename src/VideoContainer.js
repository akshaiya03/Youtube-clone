import React ,{useEffect, useState}from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from './utils/Constants';

const VideoContainer = () => {

const[videos,setvideos]=useState([])
  useEffect(()=>{
      getVideos();
  },[])

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_API)
    const json=await data.json();
   
    setvideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=><VideoCard  key={video.id}info={video}/>)}
    </div>
  )
}

export default VideoContainer
