import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SectionTitle from '../shared/SectionTitle';
import SingleBlog from "../shared/SingleBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('data/blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data));
  },[])

  return (
    <section className="blog section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Blog" title="News and Blog" description="Get the latest news, updates and tips. Building successful careers, one job at a time." />
            
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay= {true}
              speed={3000}
              allowTouchMove={true}
              freeModeMomentum={false}
              breakpoints= {{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                }
              }}
              modules={[Pagination]}
              pagination= {{clickable: true}}
              className="blog-slider"
            >
            {
              blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <SingleBlog data={blog} />
                </SwiperSlide>
              ))
            }
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;