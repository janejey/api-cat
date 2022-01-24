import { useState, useEffect } from 'react'
import './cat-images.css'
import axios from 'axios'

function CatImages({categoryId}) {
  const [catImage, setCatImage] = useState([]);

  function CatPictures() {
    console.log(categoryId)
    axios(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids${categoryId}`)
      .then(response => {
        if(categoryId) {
          setCatImage(response.data)
        } else {
        setCatImage([...catImage, ...response.data])
      }
  })}

  useEffect(() => {
    CatPictures()
  }, [categoryId])

  return (
    <div className='cat-images'>
      {catImage && catImage.map((cat, key) => <img key={key} width={"200px"} height={"200px"} src={cat.url}></img>)}
      <button className='show-more-btn-act' onClick={CatPictures}>10 more pictures</button>
    </div>
  )
}

export default CatImages;
