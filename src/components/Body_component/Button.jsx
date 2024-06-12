import React from 'react'

function Button({names}) {
  return (
    <div className='p-1 px-2 m-3 rounded-lg bg-gray-400'>
        <button>{names}</button>
    </div>
  )
}

export default Button