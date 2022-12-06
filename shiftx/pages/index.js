import { useEffect, useState } from "react"
import Product from "../components/Product";

export default function Home() {
    const [productsInfo, setProductsInfo] = useState([])
    useEffect(() => {
      fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json));
    }, []);
    
    const categoriesNames = [...new Set(productsInfo.map(p => p.category))];

  return (
      <div className="bg-purple-600 p-5">
        <div>
          {categoriesNames.map(categoryName => (
            <div key={categoryName}>
              <h2 className="text-2xl capitalize">{categoryName}</h2>
              {productsInfo.filter(p => p.category === categoryName).map(productInfo => (
                <Product {...productInfo}/>
              ))}
            </div>
          ))}
          <div className="py-4">
          </div>
        </div>
      </div>
  )
}
