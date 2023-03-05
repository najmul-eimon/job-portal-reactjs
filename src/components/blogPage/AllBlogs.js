import { useEffect, useState } from 'react';
import { slice } from 'lodash';
import {blogs} from '../../data/blog';
import SingleBlog from '../shared/blog/SingleBlog';
import LoadMoreButton from '../shared/LoadMoreButton';

const AllBlogs = () => {
  const [active, setActive] = useState('all');
  const latestBlogs = blogs.filter((blog) => blog.status.toLowerCase() !== 'featured');
  const [filterLatest, setFilterLatest] = useState(latestBlogs);
  const categories = ["All", "Popular", "Recent"];

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(9);
  const initialJobs = slice(filterLatest, 0, index);

  const loadMore = () => {
    setIndex(index + 12);
    if (index >= filterLatest.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setActive('all')
      setFilterLatest(latestBlogs)
    }
    else{
      setActive(category.toLowerCase())
      setFilterLatest(latestBlogs.filter((blog) => blog.status.toLowerCase() === category.toLowerCase()))
    }
  }

  useEffect(() => {
    setFilterLatest(filterLatest);
  }, [filterLatest])
  

  return (
    <section class="blog latest-blog">
      <div class="container">
        <div class="row align-items-center">
          {/* title */}
          <div class="col-lg-6">
            <div class="section-title">
              <h3>Latest Posts</h3>
            </div>
          </div>

          {/* filter-buttons */}
          <div class="col-lg-6">
            <div class="filter-container">
              <ul class="job-category-buttons scrollbar-hidden job-cat-btns">
                {
                  categories.map((category, index) => (
                    <li key={index} className={category.toLowerCase() === active ? 'active' : ''}>
                      <button onClick={() => handleFilter(category)} type="button" class="animate-btn animate-btn-outline">{category}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        {/* blogs */}
        <div class="row row-gutter">
          {
            initialJobs.map((blog) => <SingleBlog data={blog} dataClass="col-md-6 col-lg-4"/>)
          }
        </div>

        {/* load more button */}
        {
          !isCompleted && (
            <div className="col-lg-12">
              <LoadMoreButton action={loadMore}/>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default AllBlogs;