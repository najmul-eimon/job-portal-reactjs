import { useEffect } from 'react';
import BgSection from '../../components/authentication/BgSection';
import Register from '../../components/authentication/Register';

const Signup = () => {
  useEffect(() => {
    document.title = "Job Portal | Register"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <Register/>
      <BgSection/>
    </>
  )
}

export default Signup