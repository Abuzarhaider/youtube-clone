import React from 'react'
import "./ChannelRow.css"
import { Avatar } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ChannelRow({image, Channel, verified, subs, noOfVideos, description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo' src={image} alt={Channel}/>
        <div className="channelRow__text">
            <h4>{Channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
            <p>{subs} subscribers • {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow