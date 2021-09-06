import React, { useState } from 'react'
import { CharacterDetails } from './CharacterDetails'

export const CharacterCard = ({character}) => {
    const [showDetails, setShowDetails] = useState(false)
    const handleClose = () => {
        setShowDetails(false)
    }
    return (
        <article className="flex flex-row character-card rounded-lg shadow-2xl cursor-pointer">
            <div className="w-1/3">
                <img src={character.image} className="h-100" style={{objectFit: 'cover', height: '200px'}}></img>
            </div>
            <div className="w-2/3 flex-column p-3 text-white">
                <h4 className="text-white font-bold text-2xl">{ character.name }</h4>
                <ul>
                    <li>{character.gender} / { character.species}</li>
                    <li>{ character.location.name }</li>
                    <li>{character.status}</li>
                </ul>
                <div className="flex flex-row-reverse mt-2">
                <button type="button" class="bg-blue-400 px-2 py-1 rounded-sm">
                    Episodes
                </button>
                    <button className="bg-green-400 px-2 py-1 rounded-sm mr-1">Details</button>
                </div>
            </div>
        </article>
        /* <article style={{backgroundImage: `url(${character.image})`}} className="shadow-xl character-card border-2 p-3 cursor-pointer flex-col-reverse" onClick={() => setShowDetails(true)}>
            <header className="character-card--header">
                <h3 className="name">{character.name}</h3>
            </header>
            {
                showDetails &&
                <CharacterDetails character={character} show={setShowDetails}></CharacterDetails>
            }
        </article> */
    )
}
