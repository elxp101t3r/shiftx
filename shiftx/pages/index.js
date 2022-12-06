import { useEffect, useState } from "react"
import Product from "../components/Product";

export default function Home() {
    const [productsInfo, setProductsInfo] = useState([]);
    const [phrase,setPhrase] = useState('');
    useEffect(() => {
      fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json));
    }, []);
    
    const categoriesNames = [...new Set(productsInfo.map(p => p.category))];

    let products;
    if(phrase){
      products = productsInfo.filter(p => p.name.toLowerCase().includes(phrase))
    }else{
      products = productsInfo;
    }

  return (
      <div className="bg-purple-600 p-5">
        <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search a product..." className="bg-purple-700 w-full py-2 px-4 rounded-xl"/>
        <div>
          {categoriesNames.map(categoryName => (
            <div key={categoryName}>
              {products.find(p => p.category === categoryName) && (
                <div>
                  <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                  <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo}/>
                    </div>
                  ))}
              </div>
                </div>
              )}
              </div>
          ))}
        </div>
      </div>
  )
}
