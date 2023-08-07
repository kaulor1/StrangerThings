
import PostItem from "./PostsDisplayItem"


function DisplayPosts(setPostList) {
    console.log("DisplayPosts: setPostList", setPostList)

    
    return (
        <div>
            {
                !setPostList ? 
                '' : setPostList.map(( post) => {
                    return (
                        <PostItem key={post._id} title={post.title} author={post.author} price={post.price} willDeliver={post.willDeliver}/>
                    )
                })
            }
        </div>
    ); 
}

export default DisplayPosts