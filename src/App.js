import { useState } from 'react';
import './App.css';
import CatImages from './components/CatImages/CatImages';
import SideBar from './components/SideBar/sideBar';


function App() {

  const [categoryId, setCategoryId] = useState('')

  return (
    <div className="App">
        <SideBar setCategoryId={setCategoryId} />
        <CatImages categoryId={categoryId}/>
    </div>
  );
}

export default App;
