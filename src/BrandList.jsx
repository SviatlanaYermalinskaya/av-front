import React from "react";
import Brand from "./Brand";

const BrandList = ({brands, removeBrand, editBrand}) => {
    if (!brands.length) {
        return <h1>Марки авто не найдены</h1>
    }

    return (
        <div>
            <table className="table">
                <thead>
                <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Random Boolean</th>
                    <th scope="col">Edit Slug</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {brands.map(brando => <Brand brando={brando} key={brando.id} removeBrand={removeBrand} editBrand={editBrand}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default BrandList;