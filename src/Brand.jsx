import React from "react";


const Brand = (props) => {
    return (
        <div className='brand'>
            <strong>{props.brando.id}: {props.brando.name}: {props.brando.slug}</strong>
        </div>
    )
}

export default Brand;