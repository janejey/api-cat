import {useState, useEffect} from 'react'
import './cat-images.css'
import axios from 'axios'

function CatImages () {
    const [catImage, setCatImage] = useState();
    const [showMore, setShowMore] = useState(false);
    const [showMorePics, setShowMorePics] = useState()

useEffect(() => {
  axios("https://api.thecatapi.com/v1/images/search?limit=10")
  .then(response => setCatImage(response.data))
},[])

useEffect(() => {
    axios("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => setShowMorePics(response.data))
  },[])

return (
    <div className='cat-images'>
      {catImage && catImage.map((cat) => <img key={cat.id} width={"200px"} height={"200px"} src={cat.url}></img>)}
      <div>{showMore ? showMorePics.map((cat) => <img key={cat.id} width={"200px"} height={"200px"} src={cat.url}></img>) : ""}</div>
      <button className={`${!showMore ? 'show-more-btn-act' : 'show-more-btn-hide'} `} onClick={()=> setShowMore(true)}>10 more pictures</button>
      </div>
)
}

export default CatImages;