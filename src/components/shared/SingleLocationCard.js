import {HiArrowRight} from 'react-icons/hi2';

const SingleLocationCard = ({data}) => {
  const {status, image, location, vacancy, company} = data;

  return (
    <div className="item">
      <div className="image">
        <span>{status}</span>
        <img src={require(`../../assets/images/job-location/${image}`)} alt="Location"/>
      </div>
      <h3>{location}</h3>
      <p>
        <span>{vacancy} vacancy</span>
        <span>{company} Company</span>
      </p>
      <a href="job.html">See More <HiArrowRight className='icons'/></a>
    </div>
  )
}

export default SingleLocationCard;