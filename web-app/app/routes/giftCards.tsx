import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "ReCoin" }];
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

  console.log(ProductsHash.FreeFire)

  return (
    <main>
      <head>
        <title>ReCoin</title>
      </head>
      <body>
        <header className="z-10 header py-02 sticky top-0 flex items-center justify-between bg-white px-8 shadow-md">
          {/* <!-- logo --> */}
          <h1 className="w-3/12">
            <svg
              viewBox="0 0 248 31"
              className="h-6 w-auto duration-200 hover:text-blue-500"
            >
              <path
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="#4682B4"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                fill="#4682B4"
              ></path>
            </svg>
          </h1>

          {/* <!-- navigation --> */}
          <nav className="nav text-lg font-semibold">
            <ul className="flex items-center">
              <li className="active cursor-pointer border-b-2 border-blue-500 border-opacity-0 p-4 duration-200 hover:border-opacity-100 hover:text-blue-500">
                <Link to="/">Gift Cards</Link>
              </li>
              <li className="active cursor-pointer border-b-2 border-blue-500 border-opacity-0 p-4 duration-200 hover:border-opacity-100 hover:text-blue-500">
                <Link to="/history">History</Link>
              </li>
            </ul>
          </nav>

          {/* <!-- buttons ---> */}
          <div className="flex w-3/12 justify-end">
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-search fa-w-16 fa-9x"
              >
                <path
                  fill="#4682B4"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                  className=""
                ></path>
              </svg>
            </a>
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
              >
                <path
                  fill="#4682B4"
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  className=""
                ></path>
              </svg>
            </a>
          </div>
        </header>
        <div className="">
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
              {/* <!-- Content --> */}
              <div className="flex-1 px-2 sm:px-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-grey/50 text-3xl font-extralight">
                    All Gift Cards
                  </h3>
                </div>
                <div className="mb-10 mt-10 grid grid-cols-1 gap-4 sm:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* <!-- Cards --> */}
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="https://vetores.org/wp-content/uploads/freefire.png" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">Free Fire</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to={`/purchaseForm/?${ProductsHash.FreeFire}`}>
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="data:image/png;base64,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" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">Steam</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to="/purchaseForm">
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAACHCAMAAACPv10WAAAAaVBMVEX///8AAACenp6Tk5Ps7OxfX1/l5eXb29tHR0e7u7uwsLD5+fn8/Pzg4OD09PSkpKTBwcGMjIzNzc1+fn5nZ2cWFhY6OjozMzNsbGyqqqodHR1XV1fV1dUkJCSGhoZzc3MsLCxPT08MDAyVbHYsAAAEvUlEQVR4nO2aaZtzOhiAg9iJrahKa/n/P/INKomlVe10zDnXc38Z0uC5ZY9BCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/xLYnEOODultNGUOPTokjxhmbDuqFu+8UJ2rWP7PRuaSO95mVmoXUVWWjZXl15aFou581MJFx326Z8aOpgUh5VUuUlU1YBRF4dgxvqeGcUxN38CzUIlP7SSePMDejKWZhfKxy7kPPk4u9/PTGMM0W6n2wbvd8TVr9CqJNK2wY2oQZKjRKevy9LLjFSGKNXUgwqux6D/tknQxaq1cUt6Ki6JkXUDkMklrL9e6Lsbw2666UuEi2qaJPIbLwAaN7UKNklNjnn7aJWL1K5omNWTNRanpwmUIgRcFuxfyxxNbcvFtvbTq2XXxN1zCdp7mrbkombvhUrKiI6suy+7zGy4qwvniMXTVRTlvuLB6Ja47wMVBxfIx1rqLQjdcuqZ2gEtr05hBMVoWi6LgdZfbhot83W+Wy9hP8o5HCWx+qImY0vLKky2aPne5IZTdD53XXdI8zzIrc952Me4p4jGY8K6mFC45EbaKrd1uUSLk5i61y0eNHS66YWBM3J0qKy4VTxHvVLGwcDFQwrMU3RWGNYlJk1yYQcWPXnY577V44ILLMeGCEA+SjSWSiyiY29RF802TElE1WVjeGPYTl1plE6MA/7iLKcoCIX731pZd+PinJFOXoYbLLq0/douFPO7H3cSOz1mGwVjMYT51ae9tP+aVv5TrW7HuUnkbLqL1TFz6fPzcwj/ropQ6ozFjnqAjdNty2SwX1gzuf4PXXUpWVU1qPAj5BZcBKhruSXYJZBfhq267jB3FDhfpPX3iYgoXVtJikqnJLmeeHG67jJO7o13E0yPukmFRLJm/7TKy2+X2qYu/6XKpxNBYoddd1F93MTZdJFrzT7vgBy7amkuEdrhoB7uItq+uuJzdr7p83PYllwfji/h93KJ55HI5y9n3uKSMT8ql2zNSNRLzFQkb9+VJ5MIlMzdc8ljOvsPFCjt2bzou1i8mX4o1SBpInJU6Nu42PXKpSfOei77XYu6ymCfn0u7bNeYuLV9+bbWX62SHd4/L9h7nSy4P1i8Gd7meeC0kWy5YWnYe4SLauydcpHXltWjGw/C5y8WTu6boABfRkVGfj/CRcLlQ3iM0Gy4EmcLldoCLx1NOohszpXKhfNPpQp67YETE8nmPy1sqKy5SgxEg2QXzZOepS8pu6bzjUicdVfi5i7FUcSSX2kS86iXPXXz5t2TvuL97fyxYuqDZ1jhr+WTqIoJ4OudPu5B5PT3GhcxumvcjMD8zpBb9dC3WdtfxvMe4INxMVIbvhvwUIyxVnCcug6nFsx7igrAYZBT9Pu0az69E/kDTDf0+394M+pxmpA30V46TsvNBLqyeaU2W53lWjRNIFNOBLqHrndJrnWd1/7M7sjYuED0rK60IDRZ7OvDLLgwP40ff+rEaOCE18b4tXz+8Yw/35aWbf93l61DH7nHC4Z2UH7r0Y3iaW7r2F/7fwjVo6Ki3/iO/Ve/9ZhGkp0gN/d3fB76Oi/31L+ePwf5fKA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4P/APCXUv6HdZRmQAAAABJRU5ErkJggg==" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">FortNite</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to="/purchaseForm">
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbOfNgLBImVVGJ7Amg8vebKdSuvgidrCOBJf_oH6jaQ&s" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">Riot</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to="/purchaseForm">
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="https://www.logo.wine/a/logo/Bitcoin/Bitcoin-Logo.wine.svg" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">Bitcoin</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to="/purchaseForm">
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="https://i.pinimg.com/originals/04/c8/12/04c8125b2519673573d53e5f9c5a4b47.png" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">Cartão pré-pago - MasterCard</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to="/purchaseForm">
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600/80 hover:smooth-hover">
                    <img className="w-50 h-40 bg-gray-100 object-cover object-center rounded-xl" src="https://i.pinimg.com/originals/04/c8/12/04c8125b2519673573d53e5f9c5a4b47.png" />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">Cartão pré-pago - Visa</h4>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <Link to="/purchaseForm">
                        <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Purchase</span>
                      </Link>
                    </button>
                  </div>
                  <div>
                  </div>
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
