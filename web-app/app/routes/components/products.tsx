import { Link } from "@remix-run/react";

export default function GiftCards() {
  const ProductsHash = {
    Bitcoin: 16964,
    FreeFire: 3208,
    CreditCardMaster: 16676,
    CreditCardVisa: 16676,
    FortNite: 14684,
    Riot: 4869,
    Steam: 15674,
  };

  return (
    <main>
      <head>
        <title>ReCoin</title>
      </head>
      <body>
        <div className="">
          <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex max-w-6xl flex-1 flex-col space-y-5 bg-gray-100 sm:mx-4 sm:my-2 sm:rounded-2xl sm:p-6 lg:flex-row lg:space-x-10 lg:space-y-0">
              {/* <!-- Content --> */}
              <div className="flex-1 px-2 sm:px-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-grey/50 text-2xl font-bold">
                    All Gift Cards
                  </h3>
                </div>
                <div className="mb-10 mt-10 grid grid-cols-1 gap-4 sm:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* <!-- Cards --> */}
                  <div className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://wallery.app/dufovot/free-fire-wallpaper.webp"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="absolute bottom-12 text-2xl font-bold capitalize text-white">
                          Free Fire
                        </h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to={`/purchaseForm/?${ProductsHash.FreeFire}`}>
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://cdn-products.eneba.com/resized-products/O3Xkhy20s08A5bs55dLP7YHO69j4VB-sq1HKrAh5NbI_350x200_1x-0.jpeg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="absolute bottom-12 text-2xl font-bold capitalize text-black"></h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to="/purchaseForm">
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://i.pinimg.com/originals/ca/c7/d6/cac7d68da439ca85c36ffbcac7edbcee.jpg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="absolute bottom-12 text-2xl font-bold capitalize text-white">
                          Fortnite
                        </h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to="/purchaseForm">
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://bonoxs.com/media/catalog/product/cache/1b4f2a02dc2cb7d299364f0e7e2d60e8/l/o/lol_2023_240x300_7.jpg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="text-2xl font-bold capitalize text-white">
                          Riot
                        </h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to="/purchaseForm">
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://w0.peakpx.com/wallpaper/663/949/HD-wallpaper-bitcoin-crypto-ethereum-new-world-money-blockchain-captain-america-dollar.jpg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="absolute bottom-12 text-2xl font-bold capitalize text-white">
                          Bitcoin
                        </h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to="/purchaseForm">
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://www.mastercard.com/news/media/itspaj4u/mc_symbol_black.png?anchor=center&mode=crop&width=960&rnd=132530899096970000"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="absolute bottom-12 text-center text-2xl font-bold capitalize text-white">
                          Cartão pré-pago - MasterCard
                        </h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to="/purchaseForm">
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="group relative flex h-[400px] transform-gpu cursor-pointer flex-col items-center space-y-2 rounded-md object-cover px-4 py-10 transition-all duration-300 ease-in-out hover:bg-blue-600/80 sm:py-20"
                    onMouseEnter={(e) => {
                      e.currentTarget
                        .querySelector(".blue-bottom")
                        .classList.add("opacity-0");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget
                        .querySelector(".blue-bottom")
                        .classList.remove("opacity-0");
                    }}
                  >
                    <img
                      className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 object-cover object-center opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                      src="https://img5.goodfon.com/wallpaper/nbig/5/cb/fon-logo-logo-blue-visa-fon-viza.jpg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <div className="blue-bottom absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-800 via-blue-900 to-black transition-all duration-300 ease-in-out group-hover:h-full"></div>
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
                      <div className="flex flex-col items-center">
                        <h4 className="absolute bottom-12 text-center text-2xl font-bold capitalize text-white">
                          Cartão pré-pago - Visa
                        </h4>
                        <button className="group relative h-12 w-48 transform-gpu overflow-hidden rounded-lg bg-white text-lg shadow transition-opacity duration-300 ease-in-out group-hover:translate-y-[-2px]">
                          <Link to="/purchaseForm">
                            <div className="absolute inset-0 h-full w-full bg-blue-800 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
                            <span className="relative text-black group-hover:text-white">
                              Purchase
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer>{/* conteúdo do rodapé */}</footer>
    </main>
  );
}
