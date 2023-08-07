import { useState, useEffect, useReducer } from "react";


function Posts ({ token }) {
    // const [ message, setMessage ] = useState('')
    // const [ user, setUser ] = useState({})
    // const [ posts, setPosts ] = useState([])
    // const [description, setDescription] = useState('')
    // const [price, setPrice] = useState('')
    // const [title,setTitle] = useState('')
     const[postList, setPostList] = useState(null);

     useEffect(() => {
        async function fetchPosts() {
            try
            {

                let response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts`
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      },
                })
    
                let result = await response.json()
    
                console.log("After response result: ", result)
                setPostList(result.data.posts)
                console.log("After setting setPostList: ", setPostList)
                
            }
            catch (err){
              console.log("Posts fetchPosts: ", err);
            }
        }


        if (token.length !== 0) {
            fetchPosts() 
        }
    }, [token])
        
   
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


    
return (
    console.log("return post: ", setPostList)
    // <div>
    //     {
    //         setPostList.map((post) => {
    //             return (
    //                 <PostItem key={post._id} title={post.title} author={post.author} price={post.price} willDeliver={post.willDeliver}/>
    //             )
    //         })
    //     }
    // </div>);
)
    
}

export default Posts