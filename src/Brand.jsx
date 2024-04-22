import React from "react";


const Brand = (props) => {
    return (
        <tr>
            <th scope="row">{props.brando.id}</th>
            <td>{props.brando.name}</td>
            <td>{props.brando.slug}</td>
        </tr>
    )
}

export default Brand;