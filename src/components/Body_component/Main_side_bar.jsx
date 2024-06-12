import React from 'react'
import Button_list from './Button_list'
import VideoContainer from './VideoContainer'


function Main_side_bar() {

  return (
    <div className={`pl-0 pr-[53px] pt-0 mr-0  mt-16 ml-[164px] flex flex-col justify-center items-center`}>
    <Button_list/>
    <VideoContainer/>
    </div>
  )
}

export default Main_side_bar