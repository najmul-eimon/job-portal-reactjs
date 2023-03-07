import { useEffect } from 'react';
import BgSection from '../../components/authentication/BgSection';
import Login from '../../components/authentication/Login';

const Signin = () => {
  useEffect(() => {
    document.title = "Job Portal | Login"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <Login/>
      <BgSection/>
    </>
  )
}

export default Signin;