import { useState, useEffect } from 'react'

function Page ({ token }) {
    const [ message, setMessage ] = useState('')
    const [ user, setUser ] = useState({})
    const [ posts, setPosts ] = useState([])
    const [ userid, setUserId ] = useState('')

   console.log("AStart of Page token: ", token)
    useEffect(() => {
        async function fetchUser() {
            try
            {

                let response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/users/me`
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      },
                })
    
                let result = await response.json()
    
                console.log("After response result: ", result)
                setMessage(result.data.messages)
                setUser(result.data.username)
                setPosts(result.data.posts)
                setUserId(result.data.id)
            }
            catch (err){
              console.log("Page fetchUser: ", err);
            }
        }


        if (token.length !== 0) {
            fetchUser() 
        }
    }, [token])

    console.log('Token:', token)

    return <div>
        <h1>{message}</h1>
        <h3>User</h3>
        <ul>
            <li>Username: {user.username}</li>
        </ul>
    </div>
}

export default Page