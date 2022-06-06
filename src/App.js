import React, { useEffect, useState } from 'react'
import axios from 'axios'

import PieChart from './components/PieChart'
import './App.css'

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://collector.joshuagarcia.site/api/analytics',
      headers: { },
    };
    axios(config)
      .then(res => {
        setData(res.data);
      })
  }, []);

  return (
    <div>
       {(data.length > 0) ? <PieChart data={data} /> : <div>Loading...</div>}
    </div>
  )
}

export default App
