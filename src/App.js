import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import './App.css';
import './assets/css/filter.css';
import './assets/css/home.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
