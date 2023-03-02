import { useEffect } from 'react'
import AllJob from '../../components/job/allJob/AllJob'
import JobBanner from '../../components/job/JobBanner'
import Blog from '../../components/shared/blog/Blog'
import Newsletter from '../../components/shared/Newsletter'

const FindJob = () => {
  useEffect(() => {
    document.title = "Job Portal | Find a Job"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <JobBanner/>
      <AllJob/>
      <Blog dataClass="job-blog"/>
      <Newsletter/>
    </>
  )
}

export default FindJob;