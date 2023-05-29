import {useState, useEffect} from 'react':
import Reactdom from 'react-dom/client';
import AddPost from '.components/addPost';
import Post from './componenets/post':

function App() {
	const [post,setPost] = useState[]);
	
	const fetchPosts = () => {
	
		fetch('http://jsonplaceholder.typicode.com/posts?_limit=2')
			.then((response) => response.json())
			.then((data => setPost(data))
			
	}
	
	useFetch(() => {
		fetchPosts()
	}, []);
	
	const addPost = (title, body) => {
	
	};
	
	const deletePost = (id) => {
	
	};
	
	return (
		<main>
		<h1>Consuming REST api tutorial</h1>
			<AddPost addPost={addPost}/>
			<section className="post-container">
			<h2>Posts</h2>
				{posts.map((post) =>
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						body={post.body}
						deletePost={deletePost}
					/>
				)}
			</section>
			</main>
		)
	}

ReactDom.createRoot(document.getEleementById('root')).render(<App />;
