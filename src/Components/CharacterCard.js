import React, { useState } from 'react'
import { CharacterDetails } from './CharacterDetails'

export const CharacterCard = ({character}) => {
    const [showDetails, setShowDetails] = useState(false)
    const handleClose = () => {
        setShowDetails(false)
    }
    return (
        <article style={{backgroundImage: `url(${character.image})`}} className="shadow-xl character-card border-2 p-3 cursor-pointer flex-col-reverse" onClick={() => setShowDetails(true)}>
            <header className="character-card--header">
                <h3 className="name">{character.name}</h3>
            </header>
            {
                showDetails &&
                <CharacterDetails character={character} show={setShowDetails}></CharacterDetails>
            }
        </article>
    )
}
