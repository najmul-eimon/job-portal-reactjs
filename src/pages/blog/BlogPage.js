import { useEffect } from 'react';
import AllBlogs from '../../components/blogPage/AllBlogs';
import BlogBanner from '../../components/blogPage/BlogBanner';
import FeaturedBlog from '../../components/blogPage/featuredBlog/FeaturedBlog';
import Newsletter from '../../components/shared/Newsletter';

const BlogPage = () => {
  useEffect(() => {
    document.title = "Job Portal | Blog"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <BlogBanner/>
      <section className="section-gap">
        <FeaturedBlog/>
        <AllBlogs/>
      </section>
      <Newsletter/>
    </>
  )
}

export default BlogPage;