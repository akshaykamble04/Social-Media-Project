import { Link } from "react-router-dom";
import "./post.scss"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavouriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavouriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";




const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes", post.id],
        queryFn: () =>
            makeRequest.get("/likes?postId=" + post.id).then((res) => {
                return res.data;
            })
    });

    console.log(error);

    console.log(data);

    const queryClient = useQueryClient();

    // Mutations
    const mutation = useMutation({
        mutationFn: (liked) => {
            if (liked) return makeRequest.delete("/likes?postId=" + post.id);
            return makeRequest.post("/likes", { postId: post.id });
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["likes"] })
        },
    });

    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id));
    }


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
                            <span className="date">{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/" + post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {isLoading ? "loading" : data.includes(currentUser.id) ? (
                            <FavouriteOutlinedIcon style={{ color: "red" }} onClick={handleLike} />
                        ) : (
                            <FavouriteBorderOutlinedIcon onClick={handleLike} />
                        )}
                        {data?.length} likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        11 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        11 shares
                    </div>

                </div>
                {commentOpen && <Comments postId={post.id} />}

            </div>
        </div>
    )
}

export default Post