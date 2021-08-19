import React from 'react'
import Card from './Card'
import './local.css'

function Local({global,date,totalcase, recovered, deaths, newcases, newdeaths, activecases, toggleCard}) {
    return (
        <div className="local">
            <div className="details">
                <p className="date">Updated on : {date}</p>
                <a onClick={() =>toggleCard()}>{global ? "Show LK" : "Show Global"}</a>
            </div>
            <div className="cards">
                <Card bgcolor="#EEF2FF" color="#818CF8" name="Infected" amount={totalcase} active={newcases}/>
                <Card bgcolor="#ECFDF5" color="#10B981" name="Recovered" amount={recovered} active={activecases}/>
                <Card bgcolor="#FEF2F2" color="#EF4444" name="Deaths" amount={deaths} active={newdeaths}/>
            </div>
        </div>
    )
}

export default Local
