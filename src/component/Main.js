import React, { useEffect } from 'react'

const url = "https://covid19.mathdro.id/api";

function Main() {

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }

        getData();
    }, [])

    // const [state, setstate] = useState(data)

    return (
        <div>
            Main
        </div>
    )
}

export default Main
