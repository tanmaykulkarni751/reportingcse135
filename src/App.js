import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Loading from './components/Loading'
import Charts from './Charts'

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
      {(data.length > 0) ? <Charts data={data} /> : <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%'
      }}><Loading type={"spinningBubbles"} color={"#000000"} /></div>}
    </div>
  )
}

export default App
