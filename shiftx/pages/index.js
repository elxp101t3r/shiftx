export default function Home() {
  return (
      <div className="p-5">
        <div>
          <h2 className="text-2xl">Smartphones</h2>
          <div className="py-4">
            <div className="w-64">
              <div className="bg-gray-200 p-5 rounded-xl">
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
