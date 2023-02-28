import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const Company = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('data/brands.json')
    .then(res => res.json())
    .then(data => setCompanies(data))
  }, [])

  return (
    <section className="company section-gap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/* title */}
            <div className="title">
              <h2>The world's best companies are hiring here...</h2>
            </div>

            {/* slider */}
            <Swiper
              slidesPerView={3}
              allowTouchMove={false}
              breakpoints={{
                576: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 7,
                },
                1200: {
                  slidesPerView: 10,
                },
                1500: {
                  slidesPerView: 12,
                },
              }}
              spaceBetween={10}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={4000}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="company-slider"
            >
              {
                companies.map(({id, image}) => (
                  <SwiperSlide key={id} className="item">
                    <img src={require(`../../assets/images/company/${image}`)} alt="Logo" />
                  </SwiperSlide>
                ))
              }
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
