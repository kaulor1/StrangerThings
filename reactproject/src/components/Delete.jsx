// import Posts from "./Posts";
// import Link from 'react-router-dom'
import { useNavigate } from 'react-router-dom'





const deletePost = async ({token}) => {
    const navigate = useNavigate()
    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT//posts/${posts_id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      navigate('/posts')
      return result
    } catch (err) {
      console.error(err);
    }
  }
  export default deletePost
