import React, {useState} from "react";

const Brand = (props) => {
    //console.log(props)
    const [brand, setSlug] = useState({slug: props.brando.slug})

    const newSlug = (e) => {
        e.preventDefault()
        props.editBrand(props.brando, brand.slug)
    }

    return (
        <tr>
            <th scope="row">{props.brando.id}</th>
            <td>{props.brando.name}</td>
            <td>{props.brando.slug}</td>
            <td>{Math.random() < 0.5 ? <span style={{color: 'darkgreen'}}>Yes</span> :
                <span style={{color: 'darkred'}}>No</span>}
            </td>
            <td>
                <form>
                    <input
                        value={brand.slug}
                        onChange={e => setSlug({...brand, slug: e.target.value})}
                        type='text'
                        placeholder='Brand Slug'
                    />
                    <button className="btn btn-success" onClick={newSlug}>Edit
                    </button>
                </form>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => props.removeBrand(props.brando)}>Delete</button>
            </td>
        </tr>
    )
}

export default Brand;