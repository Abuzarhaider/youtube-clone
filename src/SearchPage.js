import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import channelImage from "./Images/channelImage.jpg"
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow';
import thumbnail from "./Images/thumbnail.png"


function SearchPage({InputSearch}) {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutlinedIcon className='searchPage__filterIcon'/>
            <h2>FILTER</h2>
        </div>
        <hr/>

        <ChannelRow
        image={channelImage}
        Channel={InputSearch}
        verified
        subs="910k"
        noOfVideos={383}
        description="You can find amazing projects and programming videos here"
        />
        <hr/>

        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
        <VideoRow
        views="1.4M"
        subs="910k"
        description="Do you want a FREE one hour training? Check this out"
        timestamp= "5 min ago"
        channel={InputSearch}
        title="Lets build a YouTube clone with React JS and Material UI"
        image={thumbnail}
        />
    </div>
  )
}

export default SearchPage