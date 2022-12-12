import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Pokemones() {

    const [info, setInfo] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/").then(resp => resp.json())
            .then(data => {
                setInfo(data.results.map(result => result.name));
            });
    }, []);

    const irAPokemon = () => {
        if (selectedPokemon === "") {
            alert("Debes seleccionar un pokemon")
        } else {
            navigate(`/pokemones/${selectedPokemon}`);    
        }
    };

    return (
        <div className='m-5 d-flex flex-column align-items-center'>
            <h2 className='mb-4'>Selecciona un pokemon</h2>
            <select
                className='mb-3 p-2 text-center form-control'
                onChange={(e) => setSelectedPokemon(e.target.value)}
                defaultValue='Selecciona un pokemon'
            >
                <option disabled>
                    Selecciona un pokemon
                </option>
                {
                    info.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))
                }
            </select>
            <button
                className='p-2 btn btn-outline-dark w-100'
                onClick={irAPokemon}
            >
                Ver detalle</button>
        </div>
    )
}

export default Pokemones