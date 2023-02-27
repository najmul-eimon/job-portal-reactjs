import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const StartWith = () => {
  const [counterData, setCounterData] = useState([]);

  useEffect(() => {
    fetch('data/startCount.json')
    .then(res => res.json())
    .then(data => setCounterData(data));
  }, [])

  return (
    <div class="start-with section-gap">
      <div class="container">
        <div class="row align-items-center row-gutter">
          <div class="col-md-6">
            <div class="left-part">
              <span>START WITH US</span>
              <h2>Explore thousands of jobs in one place and get the job of your dream</h2>
              <p>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
              <div class="buttons">
                <button type="button" class="animate-btn animate-btn-fill find-btn">
                  <i class="ph-magnifying-glass"></i>
                  Find here for new job
                </button>
                <button type="button" class="animate-btn animate-btn-outline reg-btn">
                  Register
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="right-part">
            {
              counterData.map((item) => <SingleCard key={item.id} data={item}/>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartWith;