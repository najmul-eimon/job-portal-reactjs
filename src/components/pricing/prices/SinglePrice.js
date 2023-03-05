import {FiCheck} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/svg/navigation-arrow.svg'

const SinglePrice = () => {
  return (
    <div class="col-md-6 col-lg-4">
      <div class="single-card">
        <div class="card-title">
          <small>Basic plan</small>
          <h3><small>$</small>5<span>/mo</span></h3>
          <p>or free for one user</p>
        </div>

        <div class="card-content">
          <h5>Includes:</h5>
          <ul>
            <li class="d-flex align-items-center">
              <FiCheck className='icon'/>
              <p>Feature text goes here</p>
            </li>
            <li class="d-flex align-items-center">
              <FiCheck className='icon'/>
              <p>Feature text goes here</p>
            </li>
            <li class="d-flex align-items-center">
              <FiCheck className='icon'/>
              <p>Feature text goes here</p>
            </li>
          </ul>
          <Link to="/pricing" class="animate-btn animate-btn-fill">
            <img src={arrow} alt="Arrow"/>
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SinglePrice