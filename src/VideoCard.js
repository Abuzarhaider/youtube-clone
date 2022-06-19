import React from 'react'
import { Avatar } from '@mui/material';
import './VideoCard.css'

function VideoCard({title, views, timestamp, image, channel, channelImage}) {
  return (
    <div className='videoCard'>
      
      <img className='videoCard__thumbnail' alt="" src={image} />

      <div className='videoCard__info'>
        <Avatar className='videoCard__avatar' alt={channel} src={channelImage}/>
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} • {timestamp}</p>
        </div>

      </div>
    </div>
  )
}

export default VideoCard