
import PostItem from "./PostsDisplayItem"


function DisplayPosts(setPostList) {
    const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
let query = '';

function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method
  postMatches.filter(post => {
    if (query === "") {
      //if query is empty
      return post;
    } else if (post.text.toLowerCase().includes(query.toLowerCase())) {
      //returns filtered array
      return post;
    }
  });

const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;
 postMatches.map((post =>
    <div key={post.id}>
        <span>{post.title}</span>
        <span>{post.author}</span>
    </div>))
// then, in our jsx below... map over postsToDisplay instead of posts
    console.log("DisplayPosts: setPostList", setPostList)

    
    return (
        <div>
            {
                !setPostList ? 
                '' : setPostList.map(( post) => {
                    return (
                        <PostItem key={post._id} title={post.title} author={post.author} price={post.price} willDeliver={post.willDeliver}/>
                    )
                })
            }
        </div>
    ); 
}
}
export default DisplayPosts