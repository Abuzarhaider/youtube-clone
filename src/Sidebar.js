import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected title="Home" Icon={HomeIcon}/>
        <SidebarRow title="Trending" Icon={WhatshotIcon}/>
        <SidebarRow title="Subscription" Icon={SubscriptionsOutlinedIcon}/>
        <hr/>
        <SidebarRow title="Library" Icon={VideoLibraryOutlinedIcon}/>
        <SidebarRow title="History" Icon={HistoryOutlinedIcon}/>
        <SidebarRow title="Your Videos" Icon={OndemandVideoOutlinedIcon}/>
        <SidebarRow title="Watch Later" Icon={WatchLaterOutlinedIcon}/>
        <SidebarRow title="Liked Videos" Icon={ThumbUpAltIcon}/>
        <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon}/>
    </div>
  )
}

export default Sidebar