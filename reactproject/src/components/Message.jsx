import { useEffect,useState } from "react"
import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Navigate } from "react-router-dom";

function getPosts ({ token }) {
  
    const [postList, setPostList] = useState([]);
    const {message, setMessage} = useState('');
    const navigate = useNavigate()
  
     useEffect(() => {
        async function fetchPosts() {
            try

            {

                let response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/${posts_id}`
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
                ? isAuthor === true : "not the Author"
                
            }
            catch (err){
              console.log("Posts fetchPosts: ", err);
            }
        }
navigate('/posts')

       
        if (token.length !== 0) {
            fetchPosts() 
        }
    }, [token])
    function Message (){ 
       getPosts(result.data.posts);
    }
 return<><Form.Field>
        <Checkbox label='Messages' onChange={(e) => setMessage(e.messages)}/>
            </Form.Field>
            <Button onClick={Message} type='submit'>Message</Button>
            </>         
}


export default getPosts