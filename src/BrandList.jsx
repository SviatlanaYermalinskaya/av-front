import React from "react";
import Brand from "./Brand";

const BrandList = ({brands}) => {
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
                </tr>
                </thead>
                <tbody>
                {brands.map(brando => <Brand brando={brando} key={brando.id}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default BrandList;