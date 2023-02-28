import React, { useEffect } from 'react'
import AboutUs from '../../components/home/about/AboutUs';
import Banner from '../../components/home/banner/Banner';
import PopularCategory from '../../components/home/category/PopularCategory';
import Company from '../../components/home/Company';
import StartWith from '../../components/home/startWith/StartWith';
import LatestJob from '../../components/home/latestJob/LatestJob';
import JobByLocation from '../../components/home/JobByLocation';
import Blog from '../../components/home/Blog';

const Home = () => {
  useEffect(() => {
    document.title = 'Job Portal | Home';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Banner/>
      <Company/>
      <StartWith/>
      <PopularCategory/>
      <AboutUs/>
      <LatestJob/>
      <JobByLocation/>
      <Blog/>
    </>
  )
}

export default Home;