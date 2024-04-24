import React, { useSyncExternalStore } from "react"
import MemeData from './MemeData'
import { useState } from "react";
export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages,setmemeImageLink] = useState(MemeData);

    function submitMeme(event){
        event.preventDefault();
        // console.log("take this new meme image!")
        const memeArray = allMemeImages.data.memes;
        const random = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[random].url
        // console.log(url);
        // return url;
        const {name, value } = event.target;
        setMeme((prev)=>{
            return {
                ...prev,
                [name]: value,
                randomImage: url
            }
        })
    }

    function setText(event){
        const {name, type, value } = event.target;

        setMeme((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    // console.log(meme)

    return (
        <main>
            <form onSubmit={submitMeme}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText} // Bind state to input
                    onChange={setText} // Update state on change
                    // required
                />

                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText} // Bind state to input
                    onChange={setText} // Update state on change
                    // required
                />

                <button 
                    className="form--button">

                    Get a new meme image 🖼
                </button>

            </form>


            <div className="memeImage">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}