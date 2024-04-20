import React from "react";
import Brand from "./Brand";

const BrandList = ({brands}) => {
    if (!brands.length) {
        return <h1>Марки авто не найдены</h1>
    }

    return (
        <div>
            {brands.map(brando => <Brand brando={brando} key={brando.id}/>)}
        </div>
    );
};

export default BrandList;