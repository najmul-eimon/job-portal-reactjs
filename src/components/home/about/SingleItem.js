import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const SingleItem = ({data}) => {
  const {title, icon, count} = data;

  return (
    <div class="col-sm-6 col-md-3">
      <div class="single-counter text-center">
        <div class="icon-box">
          <img src={icon} alt="Icon"/>
        </div>
        <h3>
          <CountUp end={count >= 1000 ? count/1000 : count}>
            {
              ({countUpRef, start}) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span class="counter" ref={countUpRef} />
                </VisibilitySensor>
              )
            }
          </CountUp>
          {
            count >= 1000 ? 'K+' : '+' 
          }
        </h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SingleItem;