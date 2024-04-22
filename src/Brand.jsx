import React from "react";


const Brand = (props) => {
    //console.log(props)
    return (
        <tr>
            <th scope="row">{props.brando.id}</th>
            <td>{props.brando.name}</td>
            <td>{props.brando.slug}</td>
            <td>{Math.random() < 0.5 ? <span style={{color: 'darkgreen'}}>Yes</span>: <span style={{color: 'darkred'}}>No</span>}</td>
        </tr>
    )
}

export default Brand;