import { useState } from 'react'
// when reactRouter is used, probably needs useNavigate()
import { useNavigate } from 'react-router-dom'

function Signup({ setToken }) 
{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()


    async function handleSubmit(event) 
    {
        event.preventDefault()

        if (errorMsg)
        {
            // DONT SUBMIT THE FORM
            console.log('Had a problem sending the form')
            return
        }
        console.log("username: ", username)
        console.log("password:", password)
        try
        {
            let response = await fetch('https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/users/register', 
            {
              method: 'POST',
              headers: 
              {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                 {
                   user:
                   {
                      username:username,
                      password:password
                   } 
                 }
               )
            }  
            );
            
           console.log('-- SENT TO SERVER--')

           const result = await response.json()
console.log(result)
console.log(result.data.token)
           setToken(result.data.token) // add the token to state
           navigate('/page')// after token is set, navigate to dashboard
           
           //return result
        } 
        catch(err)
        {
            console.error(err);
        }
    }

    function passwordValidation(event) {
        let pasd = event.target.value
        if (pasd.length <= 7) {
            setErrorMsg('Password is not long enough!')
        } else {
            setErrorMsg('')
        }

        setPassword(pasd)
    }
    
    return <div>
    <h1>Sign in to be able to create posts</h1>
    <h2>* You can pick any combo for your username/password</h2>

    <form className='reform' onSubmit={handleSubmit}>
        <label>Username:
            <input value={username} onChange={(event)=> setUsername(event.target.value)}/>
        </label>
        <label>Password:
            <input value={password} onChange={passwordValidation}/>
        </label>
        { errorMsg && <h3>{errorMsg}</h3>}
        <button>Sign Up</button>
        <button>Login</button>
    </form>
</div>
}
    // return <div>
    //     <h1>Sign in to be able to create posts</h1>
    //     <h2>* You can pick any combo for your username/password</h2>

    //     <form className='reform' onSubmit={handleSubmit}>
    //         <label>Username:
    //             <input value={username} onChange={(event)=> setUsername(event.target.value)}/>
    //         </label>
    //         <label>Password:
    //             <input value={password} onChange={passwordValidation}/>
    //         </label>
    //         { errorMsg && <h3>{errorMsg}</h3>}
    //         <button>Sign Up</button>
    //     </form>
    // </div>
//}

export default Signup