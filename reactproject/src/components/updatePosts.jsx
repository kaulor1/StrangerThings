import {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import { useNavigate } from 'react-router-dom'



const updatePost = async ({token}) => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [location,setLocation] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const navigate = useNavigate()
   
  
    
    
    try {
      
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT//posts/${posts_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price ,
            location: location
            }
        })
      });
      const result = await response.json();
      console.log(result);
      const isAuthor= `${token}`
                 ? isAuthor === true : "not the Author"
                 navigate('/posts')
      return result
    } catch (err) {
      console.error(err);
    }

  
<div>
<Form className="new-form">
            <Form.Field>
                <label>Title</label>
                <input placeholder='Title1' onChange={(e) => setTitle(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input placeholder='Description1' onChange={(e) => setDescription(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='WillDeliver' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={updatePost} type='submit'>Update</Button>
        </Form>
        </div>
  
}
 export default updatePost