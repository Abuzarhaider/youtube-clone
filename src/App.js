
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SearchPage from './SearchPage';
import {useState} from "react"

function App() {
  
  const [InputSearch, setInputSearch] = useState("")

  return (
    <div className='app'>
      <Router>
        <Header InputSearch={InputSearch} setInputSearch={setInputSearch} />

        <Routes>
          <Route path='/search/:searchTerm' element={
            <div className="app__page">
            <Sidebar />
            <SearchPage InputSearch={InputSearch} />
          </div>
          }/>

          <Route path='/' element={
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          }/>
        </Routes>
      </Router>




    </div>
  );
}

export default App;
