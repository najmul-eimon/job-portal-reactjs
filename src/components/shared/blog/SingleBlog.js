import { Link } from 'react-router-dom';

const SingleBlog = ({data}) => {
  const {id, image, category, title, description, author, authorImg, date, time} = data;

  return (
    <Link to={`/blog-details/${id}`} className="single-blog">
      <div className="image">
        <img src={image} alt="Blog"/>
      </div>

      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description?.introduction?.slice(0, 1)[0]}</p>
      
      <div className="blog-author">
        <div className="author">
          <img src={authorImg} alt="Avatar"/>
        </div>
        <div>
          <h4>{author}</h4>
          <ul>
            <li><small>{date}</small></li>
            <li><small>{time} read</small></li>
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default SingleBlog;