import React, {useState} from 'react';
import data from '../memesdata'
import '../App.css'
export default function Meme() {

  const [memeImage, setmemeImage] = useState({
    topText: "",
    bottomText: " ",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })
//  const [allMemesImages, setAllMemeImages] = useState(data)
  function showImage()
  {
    const memeArray = data.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNum].url;
    setmemeImage(prevState => ({
      ...prevState,
      randomImage: url
    }))
    console.log(url)
  }
  function handleChange(event)
  {
    const {name, value} = event.target
    setmemeImage(prevState => ({
      ...prevState,
      [name] : value
    }))
    console.log("EEEEE")
  }
  return (
    <main>
    <div className="form">
    <input type="text"
     placeholder="FIRST"
     name='topText'
     value={memeImage.topText}
     onChange={handleChange}
     />
    <input type="text" 
    placeholder="Second"
    name='bottomText'
    value={memeImage.bottomText}
    onChange={handleChange}
    />
    <button onClick={showImage}>Generate meme</button>  
    <div className="meme">
    <img src={memeImage.randomImage} alt="newImage" />
    <h2 className='meme-top'>{memeImage.topText}</h2>
    <h2 className='meme-bottom'>{memeImage.bottomText}</h2>
    </div>     
    </div>
    </main>
  )
}
