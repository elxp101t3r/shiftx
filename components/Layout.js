import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";


export default function Layout({children}){
    const {setSelectedProducts} = useContext(ProductsContext);
    const [success,setSuccess] = useState(false);
    useEffect(() => {
        if(window.location.href.includes('success')){
            setSelectedProducts([]);
            setSuccess(true);
        }
    }, []);
    return(
        <div>
            <div className="bg-purple-600 p-5">
            {success && (
                <div className="mb-5 bg-white text-purple-700 text-lg p-5 text-center">
                    Thanks for choosing us!
                </div>
            )}
            {children} 
        </div>
        <Footer/>
        </div>
    );
}