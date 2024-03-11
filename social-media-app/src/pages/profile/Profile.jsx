import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuiKNNDIOg79NG6f5-7V0jKg0VArh8VhaKMfKucS964QRiMJGOnjsoXCpOSLKQJIgHac&usqp=CAU" alt="" className="cover" />
                <img src="https://lh3.googleusercontent.com/ogw/AF2bZyiJ-8C7qIzKEkoNom0Uq2vQUCPrnvAslPTzYayE7A=s32-c-mo" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="userInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="https://twitter.com/?lang=en">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="https://in.linkedin.com/">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="https://in.pinterest.com/">
                            <PinterestIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>ak</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>India</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>ak.com</span>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile