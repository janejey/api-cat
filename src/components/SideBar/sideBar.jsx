import {useState, useEffect} from 'react'
import './side-bar.css'
import axios from 'axios'
function SideBar ({setCategoryId}) {
    const [hovered, setHovered] = useState(false)
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios("https://api.thecatapi.com/v1/categories")
        .then(response => setCategories(response.data))
      }, [])


    return (
        <div className={`bar-container ${hovered ? 'hovered' : 'not-hovered'} `} onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
           categories
            <div className='categories'>
            {categories && categories.map((category) => <p onClick={() => {setCategoryId(category.id)}} key={category.id}>{category.name}</p>)}
            </div>
        </div>
    )
}

export default SideBar
