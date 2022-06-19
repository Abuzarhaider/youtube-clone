import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import channelImage from "./Images/channelImage.jpg"
import thumbnail from "./Images/thumbnail.png"

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          <VideoCard
          title="Became a web developer in 30 Days | Crash Course"
          views="2.3M"
          timestamp="10 hrs ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
          <VideoCard
          title="Javvascript Crash Course for Beginners | To Advance"
          views="1.3M"
          timestamp="5 days ago"
          image={thumbnail}
          channel="JS Master"
          channelImage={channelImage}
          />
          <VideoCard
          title="Crash Course of React Native for Beginners"
          views="1.9M"
          timestamp="7 hrs ago"
          image={thumbnail}
          channel="Web 3.0"
          channelImage={channelImage}
          />
          <VideoCard
          title="Became a web developer in 30 Days | Crash Course"
          views="2.3M"
          timestamp="4 weeks ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
          <VideoCard
          title="How to master C++ | Basics to Advance | Free Course"
          views="979k"
          timestamp="13 days ago"
          image={thumbnail}
          channel="Software Club"
          channelImage={channelImage}
          />
          <VideoCard
          title="How to get placement in early college"
          views="2.3M"
          timestamp="1 month ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
          <VideoCard
          title="Javvascript Crash Course for Beginners | To Advance"
          views="1.3M"
          timestamp="5 days ago"
          image={thumbnail}
          channel="JS Master"
          channelImage={channelImage}
          />
          <VideoCard
          title="Crash Course of React Native for Beginners"
          views="1.9M"
          timestamp="1 week ago"
          image={thumbnail}
          channel="Web 3.0"
          channelImage={channelImage}
          />
          <VideoCard
          title="Became a web developer in 30 Days | Crash Course"
          views="2.3M"
          timestamp="1 day ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
          <VideoCard
          title="Javvascript Crash Course for Beginners | To Advance"
          views="1.3M"
          timestamp="5 days ago"
          image={thumbnail}
          channel="JS Master"
          channelImage={channelImage}
          />
          <VideoCard
          title="Crash Course of React Native for Beginners"
          views="1.9M"
          timestamp="1 week ago"
          image={thumbnail}
          channel="Web 3.0"
          channelImage={channelImage}
          />
          <VideoCard
          title="Became a web developer in 30 Days | Crash Course"
          views="2.3M"
          timestamp="2 days ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
          <VideoCard
          title="Javvascript Crash Course for Beginners | To Advance"
          views="1.3M"
          timestamp="5 days ago"
          image={thumbnail}
          channel="JS Master"
          channelImage={channelImage}
          />
          <VideoCard
          title="Crash Course of React Native for Beginners"
          views="1.9M"
          timestamp="1 week ago"
          image={thumbnail}
          channel="Web 3.0"
          channelImage={channelImage}
          />
          <VideoCard
          title="Became a web developer in 30 Days | Crash Course"
          views="2.3M"
          timestamp="4 days ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
          <VideoCard
          title="Javvascript Crash Course for Beginners | To Advance"
          views="1.3M"
          timestamp="5 days ago"
          image={thumbnail}
          channel="JS Master"
          channelImage={channelImage}
          />
          <VideoCard
          title="Crash Course of React Native for Beginners"
          views="1.9M"
          timestamp="1 week ago"
          image={thumbnail}
          channel="Web 3.0"
          channelImage={channelImage}
          />
          <VideoCard
          title="Became a web developer in 30 Days | Crash Course"
          views="2.3M"
          timestamp="4 days ago"
          image={thumbnail}
          channel="Sony Sangha"
          channelImage={channelImage}
          />
        </div>
    </div>
  )
}

export default RecommendedVideos