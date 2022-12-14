import { useContext, useEffect, useState } from "react"
import Layout from "../components/Layout"
import { ProductsContext } from "../components/ProductsContext"

export default function CheckoutPage(){

    const {selectedProducts,setSelectedProducts} = useContext(ProductsContext)
    const [productsInfos,setProductsInfos] = useState([]);

    useEffect(()=>{
        const uniqIds = [...new Set(selectedProducts)];
        fetch('/api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfos(json));
    },[selectedProducts]);

    function moreOfThisProduct(id){
        setSelectedProducts(prev => [...prev,id])
    }
    function lessOfThisProduct(id){
        const pos = selectedProducts.indexOf(id);
        if(pos !== -1){
            const newSelectedProducts = selectedProducts.filter((value,index) => index !== pos);
            setSelectedProducts(prev => {
                return prev.filter((value,index) => index !== pos);
            });
        }
    }

    return (
        <Layout>
            {!productsInfos.length && (
                <div>There is no products in the basket...</div>
            )}
            {productsInfos.length && productsInfos.map(productInfo =>(
                <div className="flex mb-5">
                    <div className="bg-white p-3 rounded-xl shrink-0">
                        <img className="w-20 h-20" src={productInfo.picture}></img>
                    </div>
                    <div className="pl-4">
                        <h3 className="font-bold text-lg">{productInfo.name}</h3>
                        <p className="text-sm leading-4">{productInfo.description}</p>
                        <div className="flex">
                            <div className="grow font-bold">€{productInfo.price}</div>
                            <div>
                                <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-purple-100 text-purple-100 px-2 rounded-lg">-</button>
                                <span className="px-2">
                                    {selectedProducts.filter(id => id === productInfo._id).length}
                                </span>
                                <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-black px-2 rounded-lg text-white">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            div
        </Layout>
    )
}