import {useEffect} from 'react';
import AllCompany from '../../components/recruiters/allCompany/AllCompany';
import RecruiterBanner from '../../components/recruiters/RecruiterBanner';
import Blog from '../../components/shared/blog/Blog';
import Newsletter from '../../components/shared/Newsletter';

const Recruiter = () => {
  useEffect(() => {
    document.title = "Job Portal | Recruiters"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <RecruiterBanner/>
      <AllCompany/>
      <Blog dataClass="job-blog"/>
      <Newsletter/>
    </>
  )
}

export default Recruiter;