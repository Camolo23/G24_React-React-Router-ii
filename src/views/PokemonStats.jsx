import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function PokemonStats() {

    const { id } = useParams()

    const [stats, setStats] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json())
            .then(data => {
                setStats(data)
            });
    }, []);

    return (
        <div className="card m-auto mt-5" style={{ width: '24rem' }}>
            <img
                // src={stats.sprites.other.dream_world.front_default}
                className="card-img-top" alt="..."
            />
            <div className="card-body">
                <h3 className="card-title">{stats.name}</h3>
                <ul>
                    <li>Pokedex # {stats.id}</li>
                    {stats.abilities.map(stat => {
                        return (
                            <li key={stat.ability.name}>Habilidad: {stat.ability.name}</li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default PokemonStats