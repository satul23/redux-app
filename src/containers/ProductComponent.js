import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () =>{

    const Products = useSelector((state) => state)

    return(
        <>
        <div className="four column wide">
             <div className="ui link cards">
                <div >

                </div>       
             </div>
        </div>
        </>
    );
};

export default ProductComponent;