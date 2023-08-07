

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

export default PostItem