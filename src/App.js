import Navbar from './components/navbar';
import Search from './Pages/Search';
import Upload from './Pages/Upload';
import Delete from './Pages/Delete';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';

function App() {
  

  return (
  <div className='App'>
       <Navbar />
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="login" element={<Login />} />
      <Route path="upload" element={<Upload />} />
      <Route path="delete" element={<Delete />} />
    </Routes>
   
  </div>)
}

export default App;
