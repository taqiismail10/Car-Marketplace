
const InfoSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Discover Your Perfect Car with CarMarket
              </h2>
              <p className="mt-4 text-gray-700 text-justify">
                At CarMarket, we connect you with a wide selection of new and pre-owned vehicles from trusted dealers and private sellers. Easily compare models, prices, and features to find the car that fits your lifestyle and budget. Enjoy a seamless buying experience with transparent information, secure transactions, and expert support every step of the way.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/192443/camry-exterior-left-front-three-quarter-16.jpeg?isig=0&q=80"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection