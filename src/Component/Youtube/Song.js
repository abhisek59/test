import React from 'react'

function Song(props) {
  return (
    <div>
        <div className=' max-w-auto'>
            <div className='overflow-hidden'>
            <img src={props.data.imageUrl} alt="About imgae" className='max-w-[500px] hover:scale-125 rounded border-2' />
            </div>
            <div className='flex'>
                <div>
                    <img src={props.data.avatar} alt="" className='h-16 w-16'/>
                </div>
                <div>
                    <div>
                        <h3>{props.data.heading}</h3></div>
                    <div>
                        <h5>{props.data.channelName}</h5></div>
                    <div>{props.data.views} views
                    {props.data.uploaded} Years ago</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Song