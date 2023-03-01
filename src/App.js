import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import FindJob from './pages/job/FindJob';
import './App.css';
import './assets/css/filter.css';
import './assets/css/job-location.css';
import './assets/css/blog.css';
import './assets/css/filter-container.css';
import './assets/css/advance-filter.css';
import './assets/css/newsletter.css';
import './assets/css/home.css';
import './assets/css/job.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/job' element={<FindJob/>} />
      </Route>
    </Routes>
  );
}

export default App;
