import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PokemonStats() {

    const { id } = useParams()

    const [stats, setStats] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json())
            .then(data => {
                setStats(data)
            });
    }, []);

    function aplicarMayuscula(str) {
        const palabras = str.split(" ").map(palabra => {
            return palabra[0].toUpperCase() + palabra.slice(1);
        });
        return palabras.join(" ");
    };

    return (
        <div>
            {stats.abilities === undefined ?
                <Loading />
                :
                <div className="card m-auto mt-5 w-75" style={{ width: '24rem' }}>
                    <Row>
                        <Col>
                            <img
                                src={stats.sprites.other.dream_world.front_default}
                                className="card-img-top m-2" alt="..."
                            />
                        </Col>
                        <Col>
                            <div className="card-body">
                                <h3 className="card-title">{aplicarMayuscula(`${stats.name}`)}</h3>
                                <ul>
                                    <li style={{ listStyle: 'none' }}>
                                        👾 Pokedex # {stats.id}
                                    </li>
                                    {stats.abilities.map(stat => {
                                        return (
                                            <li
                                                style={{ listStyle: 'none' }}
                                                key={stat.ability.name}>
                                                👾 Habilidad: {stat.ability.name}
                                            </li>
                                        )
                                    })}
                                    {stats.stats.map(stat => {
                                        return (
                                            <li
                                                style={{ listStyle: 'none' }}
                                                key={stat.stat.name}>
                                                👾 {aplicarMayuscula(`${stat.stat.name}`)}: {stat.base_stat}
                                            </li>
                                        )
                                    })}
                                    {stats.types.map(stat => {
                                        return (
                                            <li
                                                style={{ listStyle: 'none' }}
                                                key={stat.type.name}>
                                                👾 Tipo: {aplicarMayuscula(`${stat.type.name}`)}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    )
}

export default PokemonStats