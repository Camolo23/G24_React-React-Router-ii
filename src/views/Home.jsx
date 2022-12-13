import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

function Home() {

    const [info, setInfo] = useState({});

    const numeroAleatorio = Math.ceil(Math.random() * 20);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
            .then(resp => resp.json())
            .then(data => {
                setInfo(data)
            });
    }, []);

const test = info.sprites;

    return (
        <div>
            {test === undefined ?
                <Loading />
                : <div className='text-center'>
                    <h1 className='m-5'>Bienvenido Maestro Pokemon</h1>
                    <img src={info.sprites.other.dream_world.front_default}
                        alt="" />
                </div>}
        </div>

    )
}

export default Home