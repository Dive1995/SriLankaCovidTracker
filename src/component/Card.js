import React from 'react'
import "./card.css"
import CountUp from 'react-countup'


function Card({bgcolor, color, name, amount, active}) {
    return (
        <div className="card" style={{backgroundColor:bgcolor,borderBottom: `5px solid ${color}`}}>
            <p style={{color:color}}>{name}</p>
            {active ? 
                <div>
                    <h1 style={{color:color}}>+<CountUp start={0} end={active} duration={1.5}/></h1>
                    <h2><span><p>Total cases</p></span> <CountUp start={0} end={amount} duration={1.5}/></h2>
                </div> :
                <div>
                    {/* <h1 style={{color:color}}>+<CountUp start={0} end={active} duration={1.5}/></h1> */}
                    <h2><span><p>Total cases</p></span> <CountUp start={0} end={amount} duration={1.5}/></h2>
                </div>
            }
            
        </div>
    )
}

export default Card
