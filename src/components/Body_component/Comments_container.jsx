import React from 'react'
import CommentsMaping from './CommentsMaping'

 const commentsData=[
    {
        name:'ujjwal tiwari',
        text:'Lorem ipsum dolor sit amet consectetur adip',
        reply:[
            {
                name:'ujjwal ',
                text:'Lorem ipsum dolor sit amet consectetur adip➖',
                reply:[
                    {
                        name:'ujjwal ',
                        text:'Lorem ipsum dolor sit amet consectetur adip➕',
                        reply:[]
                    },]
            },
            {
                name:'ujjwal ',
                text:'Lorem ipsum dolor sit amet consectetur adip❤️',
                reply:[]
            },
        ]
    },
    {
        name:'ravinesh',
        text:'Lorem ipsum dolor sit amet consectetur adip ➕',
        reply:[
            {
                name:'ujjwal ',
                text:'Lorem ipsum dolor sit amet consectetur adip➖',
                reply:[
                    {
                        name:'ujjwal ',
                        text:'Lorem ipsum dolor sit amet consectetur adip➖',
                        reply:[    {
                            name:'ujjwal ',
                            text:'Lorem ipsum dolor sit amet consectetur adip➖',
                            reply:[]
                        },
                        {
                            name:'ujjwal ',
                            text:'Lorem ipsum dolor sit amet consectetur adip❌',
                            reply:[]
                        },]
                    },
                    {
                        name:'ujjwal ',
                        text:'Lorem ipsum dolor sit amet consectetur adip❌',
                        reply:[]
                    },
                ]
            },
            {
                name:'ujjwal ',
                text:'Lorem ipsum dolor sit amet consectetur adip❌',
                reply:[]
            },
        ]
    },

]



function Comments_container() {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        {
            <CommentsMaping datas={commentsData}/>
        }
       
    </div>
  )
}

export default Comments_container