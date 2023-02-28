import React, { useEffect, useState } from 'react'
import SectionTitle from '../../shared/SectionTitle';
import SingleItem from './SingleItem';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch('data/aboutUs.json')
    .then(res => res.json())
    .then(data => setAboutData(data))
  }, [])

  return (
    <section className="about section-gap">
      <div className="container">
        <div className="row">
          {/* section title */}
          <div className="col-lg-12">
            <SectionTitle subtitle="About" title="About us" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
          </div>

          {/* section content */}
          <div className="col-lg-8 offset-lg-2">
            <div className="row row-gutter">
              {
                aboutData.map((item) => <SingleItem key={item.id} data={item} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;