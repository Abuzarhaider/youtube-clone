import {React} from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import logo from './Images/logo.png'
import {Link} from "react-router-dom"

function Header({InputSearch, setInputSearch}) {

  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon className='header__leftIcon'/>
            <Link className='header__logoLink' to={"/"}>
                <img className='header__logo' src={logo} alt="YouTube logo"/>
            </Link>
        </div>
        
        <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={InputSearch} placeholder='Search' type="text" />
            <Link className='header__SearchLink' to={`/search/${InputSearch}`}>
                <SearchIcon className='header__inputButton'/>
            </Link>
        </div>

        <div className="header__right">
            <VideoCallOutlinedIcon className='header__icons'/>
            <AppsOutlinedIcon className='header__icons'/>
            <NotificationsNoneOutlinedIcon className='header__icons'/>
            <Avatar
                src="https://avatars2.githubusercontent.com/u/24712956?s=400%u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                alt="User image"
            />
        </div>
    </div>
  )
}

export default Header