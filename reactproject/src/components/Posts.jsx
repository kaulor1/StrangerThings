import {Routes, Route,} from 'react-router-dom';
import { useState, useEffect } from "react";
import DisplayPosts from "./PostsDisplay"
import PostDisplayItem from './PostsDisplayItem'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Posts ({ token }) {
    // const [ message, setMessage ] = useState('')
    // const [ user, setUser ] = useState({})
    // const [ posts, setPosts ] = useState([])
    // const [description, setDescription] = useState('')
    // const [price, setPrice] = useState('')
    // const [title,setTitle] = useState('')
    const [postList, setPostList] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [checkbox, setCheckbox] = useState(false);
        
    console.log(title);
    console.log(description);
    console.log(price);

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
                console.log("result.data.posts: ", result.data.posts)
            
                const isAuthor= `${token}`
                isAuthor === true ? setPostList() : "not the Author"
                
            }
            catch (err){
              console.log("Posts fetchPosts: ", err);
            }
        }


       
        if (token.length !== 0) {
            fetchPosts() 
        }
    }, [token])


return <div>
     
        <Form className="new-form">
            <Form.Field>
                <label>Title</label>
                <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='WillDeliver' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={Posts} type='submit'>Post</Button>
            <Button onClick={upda}
        </Form>
        
</div>
}

export default Posts