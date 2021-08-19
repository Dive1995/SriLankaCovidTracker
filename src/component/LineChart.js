import React from 'react'
import './linechart.css'
import {Line} from 'react-chartjs-2'



function LineChart({data}) {
    const recovered = data.map(item => item.recovered)
    const maxRecoveredCases = Math.max(...recovered)
    console.log(recovered);
    console.log(maxRecoveredCases);

    return (
        <div className="linechart">
            <Line
                data={{
                    labels:data.map(day => day.date),
                    datasets:[{
                        label:"Deaths",
                        data:data.map(day => day.deaths),
                        fill: true,
                        borderColor: '#EF4444',
                        backgroundColor:'#FEF2F2'
                    },
                    {
                        label:"Recovered Cases",
                        data:recovered.map((item,index) => {
                            if(item === 0 && index > 60){
                                return maxRecoveredCases;
                            }
                            return item;
                        }),
                        fill: true,
                        borderColor: '#10B981',
                        backgroundColor:'#ECFDF5'
                    }
                    ,{
                        label:"Confirmed Cases",
                        data:data.map(day => day.confirmed),
                        fill: true,
                        borderColor: '#818CF8',
                        backgroundColor:'#EEF2FF'
                    }]
                }}
                width={1100}
	            height={500}
                options={{
                    maintainAspectRatio:false
                }}
            />
        </div>
    )
}

export default LineChart
