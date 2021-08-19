import React from 'react'
import "./card.css"

function Card({bgcolor, color, name, amount, active}) {
    return (
        <div className="card" style={{backgroundColor:bgcolor,borderBottom: `5px solid ${color}`}}>
            <p style={{color:color}}>{name}</p>
            <h1 style={{color:color}}>+{active}</h1>
            <h2><span><p>Total cases</p></span> {amount}</h2>
        </div>
    )
}

export default Card
