import React, { useEffect, useState } from 'react'
import { CharacterCard } from './CharacterCard'
import axios from 'axios'

export const Home = () => {
    const [characters, setCharacters] = useState([])
    const [pagination, setPagination] = useState({
        info: null,
        currentPage: null
    })

    const getCharacters = () => {
        const chars = {
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character/?page=1'
        }

        axios(chars)
            .then(res => {
                console.log(res)
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getCharacters()
    }, [])
    return (
        <section className="grid grid-cols-3 gap-4 p-4 mt-5">
            { characters.map(character => {
                return <CharacterCard key={character.id} character={character}></CharacterCard>
            }) }
        </section>
    )
}
