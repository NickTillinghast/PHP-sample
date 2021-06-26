import React from 'react';
import axios from 'axios';
import Jokes from './Jokes';
import './ApiButton.css';

const ApiButton = () => {

    // const [useJoke, setJoke] = useEffect();
    // const [joke, getJoke] = useState('');

    // async function apiData() {

    //     try {
    //         const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    //         const data = await response.json();
    //         // console.log(json.value);
    //         if (!response.ok) {
    //             throw Error(response.statusText);
    //         } else {
    //             console.log(data.value)


    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     chuckJoke();
    // }, []);

    const url = 'https://api.chucknorris.io/jokes/random'
    function apiData() {
        axios.get(url)
            .then((response) => {
                const chuckJoke = response.data.value;
                console.log(chuckJoke)
            })

    }




    return (
        <div className="card">
            <button className='data' onClick={apiData}>Load</button>
            <Jokes />
        </div>
    )
}

export default ApiButton;

