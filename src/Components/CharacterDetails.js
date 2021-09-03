import React from 'react'

export const CharacterDetails = ({show, character}) => {

    const handleClose = (event) => {
        event.stopPropagation()
        show(false)
    }
    return (
        <div className="card-details-overlay ">
            <div className="character-card-detail transition bg-green-400 p-4 w-1/2 mt-10">
                <h2>{ character.name}</h2>
                <button onClick={(event) => handleClose(event)} className="bg-white p-2" >Close</button>
            </div>
        </div>
    )
}
