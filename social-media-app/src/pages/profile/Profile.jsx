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
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import Update from "../../components/update/Update";

const Profile = () => {

    const [openUpdate, setOpenUpdate] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const userId = parseInt(useLocation().pathname.split("/")[2]);

    const { isLoading, data } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            makeRequest.get("/users/find/" + userId).then((res) => {
                return res.data;
            })
    });

    const { isLoading: rIsLoading, data: relationshipData } = useQuery({
        queryKey: ["relationship"],
        queryFn: () =>
            makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
                return res.data;
            })
    });

    const queryClient = useQueryClient();

    // Mutations
    const mutation = useMutation({
        mutationFn: (following) => {
            if (following) return makeRequest.delete("/relationships?userId=" + userId);
            return makeRequest.post("/relationships", { userId });
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["relationship"] })
        },
    });

    const handleFollow = () => {
        mutation.mutate(relationshipData.includes(currentUser.id));
    }


    return (
        <div className="profile">
            {isLoading
                ?
                "loading"
                :
                <>
                    <div className="images">
                        <img src={"/upload/" + data?.coverPic}
                            alt=""
                            className="cover" />
                        <img src={"/upload/" + data?.profilePic}
                            alt=""
                            className="profilePic" />
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
                                <span>{data?.name}</span>
                                <div className="info">
                                    <div className="item">
                                        <PlaceIcon />
                                        <span>{data?.city}</span>
                                    </div>
                                    <div className="item">
                                        <LanguageIcon />
                                        <span>{data?.website}</span>
                                    </div>
                                </div>
                                {rIsLoading ? "loading" : userId === currentUser.id ? (
                                    <button onClick={() => setOpenUpdate(true)}>update</button>
                                ) : (
                                    <button onClick={handleFollow}>{
                                        relationshipData.includes(currentUser.id)
                                            ? "Following"
                                            : "Follow"
                                    }</button>)}
                            </div>
                            <div className="right">
                                <EmailOutlinedIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        <Posts userId={userId} />
                    </div>
                </>}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </div >
    );
}

export default Profile