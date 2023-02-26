import { bannerBg } from '../../assets/images/svgFiles/banner';
import suitcaseIcon from '../../assets/images/svg/suitcase-grey.svg';
import mapIcon from '../../assets/images/svg/map-trifold.svg';
import pencilIcon from '../../assets/images/svg/pencil-line.svg';
import Select2 from 'react-select2-wrapper';

const Banner = () => {

  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="text-center">
              <small className="explore-heading">Explore thousands of jobs in one place and get the job of your dream</small>
              <h1 className="main-heading">The <span className="color">Easiest</span> Way to Get Your <br/> <span className="border-text">New Job</span></h1>
            </div>

            <div className="filter-job">
              <div className="row">

                {/* industry */}
                <div className="col-md-6 col-lg-2">
                  <div className="single-category">
                    <div className="d-flex align-items-center category-heading">
                      <div className="d-flex align-items-center">
                        <img src={suitcaseIcon} alt="Icon"/>
                        <small>Industry</small>
                      </div>
                      <span className="icon">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.61405 8.61203L7.06739 12.0654C7.58739 12.5854 8.42739 12.5854 8.94739 12.0654L12.4007 8.61203C13.2407 7.77203 12.6407 6.33203 11.4541 6.33203H4.54739C3.36072 6.33203 2.77405 7.77203 3.61405 8.61203Z" fill="#070707"/>
                        </svg>
                      </span>
                    </div>

                    {/* <select className="filter-select" id="industry-select">
                      <option value="1">Android</option>
                      <option value="2">Accounting</option>
                      <option value="3">UX/UI Designer</option>
                      <option value="4">Fintech</option>
                      <option value="5">Front-end</option>
                      <option value="6">Back-end</option>
                      <option value="7">IOS</option>
                      <option value="8">Sound</option>
                    </select> */}

                    <Select2
                      className="filter-select" id="industry-select"
                      data={['bug', 'feature', 'documents', 'discussion']}
                      onOpen={() => console.log('onOpen')}
                      onClose={() => console.log('onClose')}
                      onSelect={() => console.log('onSelect')}
                      onChange={() => console.log('onChange')}
                      onUnselect={() => console.log('onUnselect')}
                      options={{
                        placeholder: 'search by tags',
                      }}
                    />

                  </div>
                </div>

                {/* Location */}
                <div className="col-md-6 col-lg-2">
                  <div className="single-category">
                    <div className="d-flex align-items-center category-heading">
                      <div className="d-flex align-items-center">
                        <img src={mapIcon} alt="Icon"/>
                        <small>Location</small>
                      </div>
                      <span className="icon">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.61405 8.61203L7.06739 12.0654C7.58739 12.5854 8.42739 12.5854 8.94739 12.0654L12.4007 8.61203C13.2407 7.77203 12.6407 6.33203 11.4541 6.33203H4.54739C3.36072 6.33203 2.77405 7.77203 3.61405 8.61203Z" fill="#070707"/>
                        </svg>
                      </span>
                    </div>

                    <select className="filter-select" id="location-select">
                      <option value="1">California, USA</option>
                      <option value="2">Alabama, USA</option>
                      <option value="3">Alaska</option>
                      <option value="4">Colorado</option>
                      <option value="5">Florida</option>
                      <option value="6">Georgia</option>
                      <option value="7">Indiana</option>
                      <option value="8">Louisiana</option>
                    </select>
                  </div>
                </div>

                {/* keywords */}
                <div className="col-md-6 col-lg-5">
                  <div className="single-category keywords">
                    <div className="d-flex align-items-center category-heading">
                      <img src={pencilIcon} alt="Icon"/>
                      <small>Your Keyword...</small>
                    </div>
                    <input type="text" placeholder="ui, ux, user interface, graphics" value="ui, ux, user interface, graphics"/>
                  </div>
                </div>

                {/* search button */}
                <div className="col-md-6 col-lg-3">
                  <div className="search-btn-main">
                    <button type="button" className="animate-btn animate-btn-fill search-btn">
                      <i className="ph-magnifying-glass"></i>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="popular-search"><span>Popular Searches:</span> Designer,  Web, IOS, Developer, PHP, Senior, Engineer,</p>
            </div>
          </div>
        </div>
      </div>
      {bannerBg}
    </section>
  )
}

export default Banner;