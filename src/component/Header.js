import "./header.css"

function Main({date}) {

    return (
        <div className="header">
            <div className="title">
                <div className="img">
                    <img src="lk-flag.jpeg" alt="" />
                </div>
                <h1>Sri Lanka Covid-19 Tracker</h1>
            </div>
            <h3>Wear Mask. Keep Social Distancing.</h3>
            <p>updated on {date}</p>
        </div>
    )
}

export default Main
