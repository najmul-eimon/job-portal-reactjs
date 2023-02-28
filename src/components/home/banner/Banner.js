import { bannerBg } from '../../../assets/images/svg/banner';
import suitcaseIcon from '../../../assets/images/svg/suitcase-grey.svg';
import mapIcon from '../../../assets/images/svg/map-trifold.svg';
import pencilIcon from '../../../assets/images/svg/pencil-line.svg';
import SelectDropdown from '../../shared/SelectDropdown';
import { useState } from 'react';
import SingleCategoryTitle from './SingleCategoryTitle';


const Banner = () => {
  const [search, setSearch] = useState('');
  const [showIndustry, setShowIndustry] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [industry, setIndustry] = useState("Android");
  const [location, setLocation] = useState("California, USA");
  let industries = ["Android", "Accounting", "UX/UI Designer", "Fintech", "Front-end", "Back-end", "IOS", "Sound"];
  let locations = ["California, USA", "Alabama, USA", "Alaska", "Colorado", "Florida", "Georgia", "Indiana", "Louisiana"]

  let inputText = search.trim().toLocaleLowerCase();
  if(inputText.length > 0){
    industries = industries.filter(val => val.toLocaleLowerCase().match(inputText));
    locations = locations.filter(val => val.toLocaleLowerCase().match(inputText));
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  } 

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
                    <SingleCategoryTitle icon={suitcaseIcon} label={"Industry"} arrow={true}/>
                    <SelectDropdown handleSearch={handleSearch} name={"Industry"} showDropdown={showIndustry} setShowDropdown={setShowIndustry} selectData={industry} setSelectData={setIndustry} dataArray={industries}/>
                  </div>
                </div>

                {/* Location */}
                <div className="col-md-6 col-lg-2">
                  <div className="single-category">
                    <SingleCategoryTitle icon={mapIcon} label={"Location"} arrow={true}/>
                    <SelectDropdown handleSearch={handleSearch} name={"Location"} showDropdown={showLocation} setShowDropdown={setShowLocation} selectData={location} setSelectData={setLocation} dataArray={locations}/>
                  </div>
                </div>

                {/* keywords */}
                <div className="col-md-6 col-lg-5">
                  <div className="single-category keywords">
                    <SingleCategoryTitle icon={pencilIcon} label={"Your Keyword..."} arrow={false}/>
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
              <p className="popular-search"><span>Popular Searches:</span> <a href="#!">Designer</a>,  <a href="#!">Web</a>, <a href="#!">IOS</a>, <a href="#!">Developer</a>, <a href="#!">PHP</a>, <a href="#!">Senior</a>, <a href="#!">Engineer</a>,</p>
            </div>
          </div>
        </div>
      </div>
      {bannerBg}
    </section>
  )
}

export default Banner;