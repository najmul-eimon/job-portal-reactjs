import React from 'react'
import SectionTitle from '../shared/SectionTitle';

const LatestJob = () => {
  return (
    <section class="latest-job section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Recent" title="Latest Jobs" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
            
            <ul class="latest-job-category scrollbar-hidden job-cat-btns">
              <li class="active">
                <button type="button" class="animate-btn animate-btn-outline" data-filter="all">All</button>
              </li>
              <li>
                <button type="button" class="animate-btn animate-btn-outline" data-filter=".popular">Popular</button>
              </li>
              <li>
                <button type="button" class="animate-btn animate-btn-outline" data-filter=".recent">Recent</button>
              </li>
              <li>
                <button type="button" class="animate-btn animate-btn-outline" data-filter=".near">Near</button>
              </li>
            </ul>

            <div class="row row-gutter" id="job-grid-container"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestJob;