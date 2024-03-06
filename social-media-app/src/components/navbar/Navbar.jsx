import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedicon from "@mui/icons-material/NotificationsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <span>ConnectSphere</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ?
          <WbSunnyOutlinedIcon onClick={toggle} />
          :
          <DarkModeOutlinedIcon onClick={toggle} />}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search" />
        </div>


      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedicon />
        <div className="user">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no" alt="" />
          <span>ak</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar