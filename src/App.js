import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Loading from './components/Loading'
import Charts from './Charts'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './components/Report'

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://collector.joshuagarcia.site/api/analytics',
      headers: {},
    };
    axios(config)
      .then(res => {
        setData(res.data);
      })
  }, []);

  return (
    <div>
      {(data.length > 0) ? <div>
        <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Charts data={data} />} />
        <Route path='/report' element={<Report data={data} />} />
      </Routes>
    </Router>
      </div> : <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%'
      }}><Loading type={"spinningBubbles"} color={"#000000"} /></div>}
    </div>
  )
}

export default App
