import {HiArrowRight} from 'react-icons/hi2';

const SingleCategory = ({data}) => {
  const {tag, image, title, description} = data;

  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="single-category">
        <div className="image">
          <span>{tag}</span>
          <img src={require(`../../../assets/images/category/${image}`)} alt="Category"/>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#!">More <HiArrowRight/></a>
      </div>
    </div>
  )
}

export default SingleCategory;