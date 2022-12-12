import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {

    const [info, setInfo] = useState({});

    const numeroAleatorio = Math.ceil(Math.random() * 150);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
            .then(resp => resp.json())
            .then(data => {
                setInfo(data)
            });
    }, []);

    console.log('info :>> ', info);

    return (

        <div className='text-center'>
            <h1 className='m-5'>Bienvenido Maestro Pokemon</h1>
            <p>{info.name}</p>
            <img // src={info.sprites.other.dream_world.front_default}
                alt="" />
        </div>

    )
}

export default Home