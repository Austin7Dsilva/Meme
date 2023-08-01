import React, { useState } from 'react';
import { useEffect } from 'react';

export default function MemBody() {
    const [mem, setMem] = useState({
        topText: "One does not simply",
        bottomText: "walk into Mordor",
        memImage: "https://i.imgflip.com/1ihzfe.jpg",
        name: "X, X Everywhere",
    });

    const [allMem, setAllMem] = useState([]);

    useEffect(() => {
        async function findMem() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const resultData = await res.json();
            setAllMem(resultData.data.memes);
        }
        findMem();
    }, []);

    const newMem = () => {
        const ramdonMem = Math.floor(Math.random() * allMem.length);
        const url = allMem[ramdonMem].url;
        const ramdomName = allMem[ramdonMem].name;
        setMem((prevState) => {
        return { ...prevState, memImage: url, name: ramdomName };
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMem((prevMemBody) => {
            return { ...prevMemBody, [name]: value };
        });
    }

    return (
        <main>
            <div className="form">
                <div className="textBody">
                    <input 
                        type="text"
                        placeholder='image-header'
                        className='form--input' 
                        name="topText"
                        value={mem.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder='image-footer'
                        className='form--input'
                        value={mem.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </div>

                <input 
                    type="text" 
                    className='form-name'
                    value={mem.name}
                    onChange={handleChange}
                />
                <button
                    className='form--button'
                    onClick={newMem}
                >
                    hit me to get new MEME
                </button>

                <div className="meme">
                    <img src={mem.memImage} alt="meme" className="meme--img" />
                    <h2 className="meme--text bottom">{mem.bottomText}</h2>
                    <h2 className="meme--text top">{mem.topText}</h2>
                </div>
            </div>
        </main>
    )
}
