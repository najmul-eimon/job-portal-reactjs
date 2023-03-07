import { useEffect } from 'react'
import Faq from '../../components/pricing/Faq'
import FaqContact from '../../components/pricing/FaqContact'
import Price from '../../components/pricing/prices/Price'

const Pricing = () => {
  useEffect(() => {
    document.title = "Job Portal | Pricing"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <Price/>
      <Faq/>
      <FaqContact/>
    </>
  )
}

export default Pricing