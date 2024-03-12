import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import Share from "../../components/share/Share";
import "./home.scss"

const Home = () => {
    return (
        <div>
            <Stories />
            <Share />
            <Posts />
        </div>


    )
}

export default Home