import { slice } from 'lodash';
import React, { useEffect, useState } from 'react'
import LoadMoreButton from '../../shared/LoadMoreButton';
import SectionTitle from '../../shared/SectionTitle';
import SingleLatestJob from './SingleLatestJob';

const LatestJob = () => {
  let filterCategory = ["All", "Popular", "Recent", "Near"];
  const [latestJob, setLatestJob] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(6);
  const initialJobs = slice(latestJob, 0, index);

  const loadMore = () => {
    setIndex(index + 6);
    console.log(index);
    if (index >= latestJob.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }

  useEffect(() => {
    fetch('data/company.json')
    .then(res => res.json())
    .then(data => setLatestJob(data))

  }, [])

  return (
    <section className="latest-job section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Recent" title="Latest Jobs" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
            
            <ul className="latest-job-category scrollbar-hidden job-cat-btns">
              {
                filterCategory.map((category, index) => (
                  <li key={index}>
                    <button type="button" className="animate-btn animate-btn-outline">{category}</button>
                  </li>
                ))
              }
            </ul>

            <div className="row row-gutter">
              {
                initialJobs.map((job) => <SingleLatestJob key={job.id} data={job}/>)
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
        </div>
      </div>
    </section>
  )
}

export default LatestJob;