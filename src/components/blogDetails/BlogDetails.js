import { useParams } from 'react-router-dom';
import {blogs} from '../../data/blog';
import { shareIcons } from '../../data/aboutUs';

const BlogDetails = () => {
  const {blogId} = useParams();

  const SingleBlog = blogs.find((blog) => blog.id === blogId);
  const {title, author, authorImg, date, time, image, description, tags} = SingleBlog;

  return (
    <section class="blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {/* blog title */}
            <h2>{title}</h2>

            {/* blog author */}
            <div class="blog-author">
              <div class="author">
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

            {/* introduction */}
            <h3>Introduction</h3>
            <p>{description.introduction[0]}</p>
            
            <div class="blog-image">
              <div class="row align-items-center row-gutter">
                <div class="col-md-6 col-lg-7">
                  <blockquote class="varient1">{description.introduction[1]}</blockquote>
                </div>
                <div class="col-md-6 col-lg-5">
                  <figure>
                    <img src={image} alt="Blog Details"/>
                    <figcaption>Image caption goes here</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* blockquote */}
            <blockquote class="varient2">{description.introduction[2]}</blockquote>
            <p>{description.introduction[3]}</p>
          
            <blockquote class="varient3">"{description.introduction[4]}"</blockquote>
            <p>{description.introduction[5]}</p>
            
            {/* Conclusion */}
            <h3>Conclusion</h3>
            {description.concliusion.map((item, index) => <p key={index}>{item}</p>)}


            <div class="share">
              <div class="row align-items-end">
                {/* share this post */}
                <div class="col-md-6 order-2 order-md-1">
                  <div class="share-post">
                    <h4>Share this post</h4>
                    <ul>
                      {
                        shareIcons.map(({id, icon}) => (
                          <li key={id}>
                            <a href="#!">
                              <img src={icon} alt="Icon"/>
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
  
                {/* tags */}
                <div class="col-md-6 order-1 order-md-2">
                  <ul class="d-flex align-items-center tags">
                    {
                      tags.map((tag, i) => <li key={i}><a href="#!">{tag}</a></li>)
                    }
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails;