import Header from "./component/Header";
import React, { useEffect, useState } from 'react'
import Local from "./component/Local";
import "./app.css"
import LineChart from "./component/LineChart";

const url = "https://hpb.health.gov.lk/api/get-current-statistical";

function App() {

  useEffect(() => {
    const getData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const results = await response.json();
        const info = results.data;
        setData(info);
        setLoading(false);
    }
      getData();
  }, [])

  useEffect(() => {
    const getLocalDataForChart = async () => {
      const resp = await fetch('https://pomber.github.io/covid19/timeseries.json');
      const result = await resp.json();
      // console.log(result["Sri Lanka"]);
      setLocaldata(result["Sri Lanka"]);
    }

    getLocalDataForChart();
  }, [])

  // ##### NOT ENOUGH DATA FOR GLOBAL CHART - API HAS ONLY DATA UPTO FEB 2021

  // useEffect(() => {
  //   const getGlobalDataForChart = async () => {
  //     const resp = await fetch('https://covid19.mathdro.id/api/daily');
  //     const result = await resp.json();
  //     console.log(result);
  //   }
  //   getGlobalDataForChart()
  // },[])

  const [data, setData] = useState('');
  const [localdata, setLocaldata] = useState([]);
  const [global,setGlobal] = useState(false);
  const [isLoading, setLoading] = useState(false);


  const toggleCard = () => {
    setGlobal(!global)
  }

  if(isLoading){
    return <div className='App'>
      <Header/>
      <div className="loading"></div>
    </div>
  }

  return (
    <div className="App">
      <Header/>
      {global ? 
        <Local 
          date={data.update_date_time}
          newcases={data.global_new_cases}
          newdeaths={data.global_new_deaths}
          activecases={data.global_active_cases}
          totalcase={data.global_total_cases} 
          recovered={data.global_recovered} 
          deaths={data.global_deaths}
          toggleCard={toggleCard}
          global={global}
        />
        :
        <div>
          <Local 
            date={data.update_date_time}
            newcases={data.local_new_cases}
            newdeaths={data.local_new_deaths}
            activecases={data.local_active_cases}
            totalcase={data.local_total_cases} 
            recovered={data.local_recovered} 
            deaths={data.local_deaths}
            toggleCard={toggleCard}
            global={global}
          />
          <LineChart data={localdata}/>
        </div>
        
      }
      
    </div>
  );
}

export default App;
