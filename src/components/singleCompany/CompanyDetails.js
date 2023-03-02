import { useEffect, useState } from "react";
import SingleJobCard from "./SingleJobCard";

const CompanyDetails = ({singleCompany}) => {
  const categories = ["All", "Popular", "Recent"];
  const [active, setActive] = useState('all');
  const [filterJobs, setFilterJobs] = useState(singleCompany.jobs);

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setActive('all');
      setFilterJobs(singleCompany.jobs);
    }
    else{
      setActive(category.toLocaleLowerCase())
      setFilterJobs(singleCompany.jobs?.filter((job) => job.status.toLowerCase() === category.toLowerCase()))
    }
  }

  console.log(singleCompany.jobs);

  useEffect(() => {
    setFilterJobs(singleCompany.jobs)
  }, [singleCompany])

  return (
    <section class="location-job section-gap">
      <div class="container">
        <div class="row">
          {/* latest job */}
          <div class="col-lg-8 order-2 order-lg-1">
            <div class="latest-job">
              <div class="section-title">
                <h3>Latest Jobs</h3>
              </div>

              {/* filter-container */}
              <div class="filter-container">
                {/* page count */}
                <div class="page-count">
                  <p>Showing <span>01-09</span> of <span>44 </span> jobs</p>
                </div>

                <ul class="job-category-buttons scrollbar-hidden job-cat-btns">
                  {
                    categories.map((category, index) => (
                      <li key={index} className={category.toLocaleLowerCase() === active ? 'active' : ''}>
                        <button type="button" className="animate-btn animate-btn-outline" onClick={() => handleFilter(category)}>{category}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>

              {/* jobs */}
              <div class="col-lg-12">
                <div class="row row-gutter">
                  {
                    filterJobs?.map((job) => <SingleJobCard key={job.id} data={job}/>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails;