import {useState, useEffect} from 'react'
import './side-bar.css'
import axios from 'axios'
function SideBar () {
    const [hovered, setHovered] = useState(false)
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios("https://api.thecatapi.com/v1/categories")
        .then(response => setCategories(response.data))
      }, [])
      console.log(categories)


    return (
        <div className={`bar-container ${hovered ? 'hovered' : 'not-hovered'} `} onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
           categories
            <div className='categories'>
            {categories && categories.map((category) => <p key={category.id}>{category.name}</p>)}
            </div>
        </div>
    )
}

export default SideBar