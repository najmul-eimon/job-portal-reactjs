import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import FindJob from './pages/job/FindJob';
import Recruiter from './pages/recruiters/Recruiter';
import SingleCompany from './pages/singleCompany/SingleCompany';
import BlogPage from './pages/blog/BlogPage';
import SingleBlog from './pages/blogDetails/SingleBlog';
import Pricing from './pages/pricing/Pricing';
import './App.css';
import './assets/css/filter.css';
import './assets/css/job-location.css';
import './assets/css/blog.css';
import './assets/css/filter-container.css';
import './assets/css/advance-filter.css';
import './assets/css/newsletter.css';
import './assets/css/home.css';
import './assets/css/job.css';
import './assets/css/recruiter.css';
import './assets/css/company-details.css';
import './assets/css/blog-page.css';
import './assets/css/pricing.css';


function App() {
  
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='job' element={<FindJob/>} />
        <Route path='recruiters' element={<Recruiter/>} />
        <Route path='recruiters/:companyId' element={<SingleCompany/>} />
        <Route path='blog' element={<BlogPage/>} />
        <Route path='blog/:blogId' element={<SingleBlog/>} />
        <Route path='pricing' element={<Pricing/>} />
      </Route>
    </Routes>
  );
}

export default App;
