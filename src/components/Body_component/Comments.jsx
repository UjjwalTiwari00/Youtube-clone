import React from 'react'

function Comments({data}) {
  return (
    <div>
        <h1 className='font-bold'>{data.name}</h1>
        <h3>{data.text}</h3>
        {/* <h3>{data.reply}</h3> */}
    </div>
  )
}

export default Comments