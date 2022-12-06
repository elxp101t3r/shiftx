export default function Product({name,price,description,picture}){
    return(
        <div className="w-64">
              <div className="bg-white p-5 rounded-xl">
                <img src={picture} alt=""/>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">{name}</h3>
              </div>
              <p className="text-sm mt-1 leading-4">{description}</p>
              <div className="flex mt-1">
                  <div className="text-2xl font-bold grow">€{price}</div>
                  <button className="bg-black text-white py-1 px-3 rounded-xl">+ to cart</button>
              </div>
            </div>
    );
}