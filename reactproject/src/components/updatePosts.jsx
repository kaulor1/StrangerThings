import {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'




const updatePost = async ({token}) => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [location,setLocation] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    
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
                isAuthor === true ? setPostList() : "not the Author"
      return result
    } catch (err) {
      console.error(err);
    }



    const setData = (result) => {
        let { id, title, description,price ,checkbox } = result;
        localStorage.setItem('ID', id);
        localStorage.setItem('title', title);
        localStorage.setItem('description', description);
        localStorage.setItem('price', price);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('Title'));
        setDescription(localStorage.getItem('Description'));
        setPrice(localStorage.getItem('Price'));
        setCheckbox(localStorage.getItem('Checkbox '))
}, []);





  
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