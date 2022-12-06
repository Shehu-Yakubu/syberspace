import { useParams, useHistory } from "react-router-dom";
import { useQuery } from 'react-useQuery';

const BlogDetails = () => {
    const {id} = useParams();
    const {isLoading, error, data: blog,} = useQuery('blogDetails',
        () => fetch('http://localhost:8000/blogs/' + id)
        .then(res => res.json()))
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then( () => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}

export default BlogDetails;