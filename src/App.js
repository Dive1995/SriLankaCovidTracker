import Header from "./component/Header";
import React, { useEffect, useState } from 'react'
import Local from "./component/Local";
import "./app.css"

const url = "https://hpb.health.gov.lk/api/get-current-statistical";

function App() {

  useEffect(() => {
    const getData = async () => {
        const response = await fetch(url);
        const results = await response.json();
        const info = results.data;
        setData(info)
    }
      getData();
  }, [])

  const [data, setData] = useState('');
  console.log(data);


  return (
    <div className="App">
      <Header date={data.update_date_time}/>
      <Local 
        newcases={data.local_new_cases}
        newdeaths={data.local_new_deaths}
        activecases={data.local_active_cases}
        totalcase={data.local_total_cases} 
        recovered={data.local_recovered} 
        localdeaths={data.local_deaths}/>
    </div>
  );
}

export default App;
