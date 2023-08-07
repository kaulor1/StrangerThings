

function PostItem({title, author, description, price, willDeliver}) {
    return <div>
        <h2>{title}</h2>
            <ul>
                <li>{author}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{willDeliver}</li>
                               
            </ul>
    </div>
}


function DisplayPosts({setPostList}) {
    return (
        <div>
            {
                setPostList.map((post) => {
                    return (
                        <PostItem key={post._id} title={post.title} author={post.author} price={post.price} willDeliver={post.willDeliver}/>
                    )
                })
            }
        </div>
    ); 
}DisplayPosts()

export default DisplayPosts