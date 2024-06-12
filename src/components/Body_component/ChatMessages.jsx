import React from 'react'
import { VscAccount } from "react-icons/vsc";
function ChatMessages({name,message}) {
  return (
    <div className='flex items-center bg-gray-300 rounded-md px-2 p-1 m-2'>
        <div>
        <VscAccount size={25}/>
        </div>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessages