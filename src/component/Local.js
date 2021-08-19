import React from 'react'
import Card from './Card'
import './local.css'

function Local({totalcase, recovered, localdeaths, newcases, newdeaths, activecases}) {
    return (
        <div className="local">
            <Card bgcolor="#EEF2FF" color="#818CF8" name="Infected" amount={totalcase} active={newcases}/>
            <Card bgcolor="#ECFDF5" color="#10B981" name="Recovered" amount={recovered} active={activecases}/>
            <Card bgcolor="#FEF2F2" color="#EF4444" name="Deaths" amount={localdeaths} active={newdeaths}/>
        </div>
    )
}

export default Local
