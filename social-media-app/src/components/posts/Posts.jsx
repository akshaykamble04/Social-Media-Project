// import { makeRequest } from "../../axios";
// import Post from "../post/Post";
// import "./posts.scss"
// import {
//     useQuery,
// } from '@tanstack/react-query';

// const Posts = ({ userId }) => {

//     const { isLoading, error, data } = useQuery({
//         queryKey: ["posts"],
//         queryFn: () =>
//             makeRequest.get("/posts?userId=" + userId).then((res) => {
//                 return res.data;
//             })
//     });

//     console.log(data);

//     return (
//         // <div className="posts">
//         //     {error
//         //         ?
//         //         "Something went wrong"
//         //         :
//         //         isLoading
//         //             ? "loading"
//         //             : data.map((post) => <Post post={post} key={post.id} />)}
//         // </div>
//         <div className="posts">
//             {error
//                 ? "Something went wrong!"
//                 : isLoading
//                     ? "loading"
//                     : data.map((post) => <Post post={post} key={post.id} />)}
//         </div>
//     );
// };

// export default Posts

import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./posts.scss"
import { useQuery } from '@tanstack/react-query';

const Posts = ({ userId }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
            makeRequest.get("/posts?userId=" + userId).then((res) => {
                return res.data;
            })
    });

    console.log(data);

    return (
        <div className="posts">
            {error
                ? "Something went wrong!"
                : isLoading
                    ? "loading"
                    : (data && data.length > 0) // Check if data is defined and not empty
                        ? data.map((post) => <Post post={post} key={post.id} />)
                        : "No posts available"}
        </div>
    );
};

export default Posts;
