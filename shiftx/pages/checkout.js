import { useContext, useEffect, useState } from "react"
import Layout from "../components/Layout"
import { ProductsContext } from "../components/ProductsContext"

export default function CheckoutPage(){
    
    const {selectedProducts,setSelectedProducts} = useContext(ProductsContext)
    const [productsInfos,setProductsInfos] = useState([]);
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    useEffect(()=>{
        const uniqIds = [...new Set(selectedProducts)];
        fetch('/api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfos(json || []));
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
    const deliveryPrice = 7;
    let subtotal = 0;
    if(selectedProducts?.length){
        for(let id of selectedProducts){
            const priceObj = productsInfos.find(p => p._id === id) || {};
            subtotal += priceObj.price || 0;
        }
    }

    const total = subtotal + deliveryPrice;

    return (
        <Layout>
            {!productsInfos.length && (
                <div>There is no products in the basket...</div>
            )}
            {productsInfos.length && productsInfos.map(productInfo =>(
                <div className="flex mb-3" key={productInfo._id}>
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
            <div className="mt-4">
                <input value={address} onChange={e => setAddress(e.target.value)} className="bg-purple-700 w-full rounded-lg px-4 py-2 mb-1 text-white focus:outline-none placeholder:text-white" type="text" placeholder="Street address"/>
                <input value={city} onChange={e => setCity(e.target.value)} className="bg-purple-700 w-full rounded-lg px-4 py-2 mb-1 text-white focus:outline-none placeholder:text-white" type="text" placeholder="City and postal"/>
                <input value={name} onChange={e => setName(e.target.value)} className="bg-purple-700 w-full rounded-lg px-4 py-2 mb-1 text-white focus:outline-none placeholder:text-white" type="email" placeholder="Name"/>
                <input value={email} onChange={e => setEmail(e.target.value)} className="bg-purple-700 w-full rounded-lg px-4 py-2 mb-1 text-white focus:outline-none placeholder:text-white" type="email" placeholder="Email Address"/>
            </div>
            <div className="mt-4">
                <div className="flex my-3">
                    <h3 className="grow font-bold">Subtotal:</h3>
                    <h3 className="font-bold">€{subtotal}</h3>
                </div>
                <div className="flex my-3">
                    <h3 className="grow font-bold">Delivery Costs:</h3>
                    <h3 className="font-bold">€{deliveryPrice}</h3>
                </div>
                <div className="flex my-3 border-t pt-3 border-dashed border-white">
                    <h3 className="grow font-bold">Total:</h3>
                    <h3 className="font-bold">€{total}</h3>
                </div>
            </div>
            <button className="bg-white px-5 py-2 font-bold rounded-xl text-purple-800 w-full my-4 shadow-purple-800 shadow-lg">Pay €{total}</button>
        </Layout>
    )
}