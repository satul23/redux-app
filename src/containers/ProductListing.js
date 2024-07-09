import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {


     return (
        <>
         <div className="ui grid container">
            <h1>
                <ProductComponent/>
            </h1>
         </div>
        </>
     )
}

export default ProductListing;