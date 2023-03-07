import { useEffect } from 'react'
import Menubar from '../../components/navigation/Menubar'
import NotFound from '../../components/notFound/NotFound'

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Job Portal | Page Not Found"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <Menubar/>
      <NotFound/>
    </>
  )
}

export default NotFoundPage;