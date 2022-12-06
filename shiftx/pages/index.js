import { useEffect, useState } from "react"

export default function Home() {
    const [productsInfo, setProductsInfo] = useState([])
    useEffect(() => {
      fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json));
    }, []);
    
    const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
    console.log({categoriesNames});

  return (
      <div className="bg-purple-600 p-5">
        <div>
          <h2 className="text-2xl">Audio</h2>
          <div className="py-4">
            <div className="w-64">
              <div className="bg-white p-5 rounded-xl">
                <img src="/products/razer.png" alt=""/>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">razer-thx</h3>
              </div>
              <p className="text-sm mt-1 leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex mt-1">
                  <div className="text-2xl font-bold grow">49.99$</div>
                  <button className="bg-black text-white py-1 px-3 rounded-xl">+ to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
