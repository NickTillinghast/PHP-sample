import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import axios from 'axios';

import './ApiButton.css';

const ApiButton = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = useState({ joke: '' });
    let iconStyles = { color: "white", fontSize: "1.9em" }


    const url = 'https://api.chucknorris.io/jokes/random'
    const fetchData = async () => {
        setIsLoading(true);
        const result = await axios.get(url)
        console.log(result.data.value);
        setState({ ...state, joke: result.data.value }, setIsLoading(false));


    }

    return (
        <div className="card">
            {!isLoading && <button className='data' onClick={fetchData}>Load</button>}
            {isLoading && <button className='data' disabled><FaSpinner /><i className=''></i>calling joke</button>}
            {/* <button className='data' onClick={fetchData}>Load</button> */}
            <div className="joke" ><GrFavorite style={iconStyles} />{state.joke}</div>

        </div>
    )
}

export default ApiButton;

