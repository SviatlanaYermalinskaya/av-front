// import logo from './logo.svg';
// import './App.css';
import BrandList from "./BrandList";
import axios from "axios";
import {useState} from "react";


const API_URL = 'http://localhost:8000/api/brand/'

function App() {
    const [brands, setBrands] = useState([])
    async function getBrands(){
        const response = await axios.get(API_URL)
        setBrands(response.data)
    }


    return (
        <div className="App">
            <h1>Привет, Светлана!!!</h1>
            <button onClick={getBrands}>Обновить марки авто</button>
            <BrandList brands={brands}/>
        </div>
    );
}

export default App;
