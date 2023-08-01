import React from 'react'
import trollFace from '../images/troll-face.png'


function HeaderMem() {
    return (
        <header className="header">
            <img className="header--img" src={trollFace} alt="troll face" />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}

export default HeaderMem