import { useEffect, useState } from "react"
import Product from "../components/Product";
import { findAllProducts } from "./api/products";

export default function Home({products}) {
    const [phrase,setPhrase] = useState('');
 
    
    const categoriesNames = [...new Set(products.map(p => p.category))];

    if(phrase){
      products = products.filter(p => p.name.toLowerCase().includes(phrase))
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

export async function getServerSideProps(){
  await initMongoose();
  const products = await findAllProducts();
  return{
    props:{
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
