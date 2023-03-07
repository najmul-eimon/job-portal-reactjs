import { useEffect } from 'react'
import Address from '../../components/contact/Address'
import ContactUs from '../../components/contact/ContactUs'

const Contact = () => {
  useEffect(() => {
    document.title = "Job Portal | Contact Us"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <Address/>
      <ContactUs/>
    </>
  )
}

export default Contact;