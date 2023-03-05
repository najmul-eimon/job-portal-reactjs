import { useEffect } from 'react'
import BlogDetailBanner from '../../components/blogDetails/BlogDetailBanner';
import BlogDetails from '../../components/blogDetails/BlogDetails';
import Blog from '../../components/shared/blog/Blog';

const SingleBlog = () => {
  useEffect(() => {
    document.title = "Job Portal | Blog Details"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <BlogDetailBanner/>
      <BlogDetails/>
      <Blog dataClass="blog-details-blog"/>
    </>
  )
}

export default SingleBlog;