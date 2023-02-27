import React from 'react'
import SectionTitle from '../../shared/SectionTitle';
import {aboutUs} from '../../../data/counter';
import SingleItem from './SingleItem';

const AboutUs = () => {
  return (
    <section class="about section-gap">
      <div class="container">
        <div class="row">
          {/* section title */}
          <div class="col-lg-12">
            <SectionTitle subtitle="About" title="About us" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
          </div>

          {/* section content */}
          <div class="col-lg-8 offset-lg-2">
            <div class="row row-gutter">
              {
                aboutUs.map((item) => <SingleItem key={item.id} data={item} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;