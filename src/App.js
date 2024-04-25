// import logo from './logo.svg';
// import './App.css';
import BrandList from "./BrandList";
import axios from "axios";
import {useState} from "react";
import AddBrand from "./AddBrand";


const API_URL = 'http://localhost:8000/api/brand/'

function App() {
    const [brands, setBrands] = useState([])
    async function getBrands(){
        const response = await axios.get(API_URL)
        setBrands(response.data.sort(
            (brand1, brand2) => {return brand1.name.localeCompare(brand2.name, "en")}
        ))
    }

    const removeBrand = (brand) => {
        setBrands(brands.filter(br => br.id !== brand.id))
        axios.delete(API_URL + brand.id.toString() + '/')
    }

    const editBrand = (brand, slug) => {
        const allWithoutMentioned = brands.filter(br => br.id !== brand.id)
        brand.slug = slug
        setBrands([...allWithoutMentioned, brand].sort((brand1, brand2) => {return brand1.name.localeCompare(brand2.name, "en")}))
        // setBrands([...allWithoutMentioned, brand].sort((brand1, brand2) => {return brand1.id - brand2.id}))
        axios.put(API_URL + brand.id.toString() + '/', brand)
    }

    async function createBrand(newBrand) {
        //setBrands([...brands, newBrand].sort((brand1, brand2) => {return brand1.name.localeCompare(brand2.name, "en")}))
        await axios.post(API_URL, newBrand)
        const response = await axios.get(API_URL)
        setBrands(response.data.sort(
            (brand1, brand2) => {return brand1.name.localeCompare(brand2.name, "en")}
        ))
    }

    return (
        <div className="App">
            <h1>Привет, Светлана!!!</h1>
            <AddBrand createBrand={createBrand}/>
            <button onClick={getBrands}>Обновить марки авто</button>
            <BrandList brands={brands} removeBrand={removeBrand} editBrand={editBrand}/>
        </div>
    );
}

export default App;
