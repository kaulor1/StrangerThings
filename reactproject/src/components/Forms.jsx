



function PostPosts({postList}) {
    return (
        <div>
            {
                postList.map((post) => {
                    return (
                        <PostItem key={post._id} title={post.title} author={post.author} price={post.price} willDeliver={post.willDeliver}/>
                    )
                })
            }
        </div>
    );
}

export default PostPosts