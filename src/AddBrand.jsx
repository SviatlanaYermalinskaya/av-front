import React, {useState} from "react";

const AddBrand = ({createBrand}) => {
    const [brand, setBrand] = useState({name: '', slug: ''})

    const addNewBrand = (e) => {
        e.preventDefault()
        createBrand(brand)
        setBrand({name: '', slug: ''})
    }

    return (
        <form>
            <input
                value={brand.name}
                onChange={e => setBrand({...brand, name: e.target.value})}
                type='text'
                placeholder='Brand Name'
            />
            <input
                value={brand.slug}
                onChange={e => setBrand({...brand, slug: e.target.value})}
                type='text'
                placeholder='Brand Slug'
            />
            <button onClick={addNewBrand}>Add Brand</button>
        </form>
    )
}

export default AddBrand;