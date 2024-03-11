import { useContext } from "react";
import "./comments.scss"
import { AuthContext } from "../../context/authContext";


const Comments = () => {

    const currentUser = useContext(AuthContext);


    const comments = [
        {
            id: 1,
            desc: "nice",
            name: "ak",
            userId: 1,
            profilePicture: "https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no",

        },
        {
            id: 2,
            desc: "awesome",
            name: "ak",
            userId: 1,
            profilePicture: "https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no",

        },
    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment..." />
                <button>Post</button>

            </div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePicture} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }</div>
    )
}

export default Comments