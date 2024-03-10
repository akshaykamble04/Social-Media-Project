import { Link } from "react-router-dom";
import "./post.scss"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavouriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavouriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";


const Post = ({ post }) => {

    //temp
    const liked = false;

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`}
                                style={{ textDecoration: "none", color: "inherit" }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavouriteOutlinedIcon /> : <FavouriteBorderOutlinedIcon />}
                        11 likes
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon />
                        11 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        11 shares
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Post