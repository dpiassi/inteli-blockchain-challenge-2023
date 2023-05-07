import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React, { useState } from "react";
import Modal from "react-modal";
import createOrder from "~/dao/createOrder";

export const meta: V2_MetaFunction = () => [{ title: "ReCoin" }];

export default function GiftCards() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  //const navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const giftCard = await createOrder({
        productId: 13960, //Vai ter que pegar do state de cada card
        countryCode: formData.get("contry-code-input") as string,
        quantity: formData.get("quantity-input") as unknown as number,
        unitPrice: formData.get("price-input") as unknown as number,
        senderName: formData.get("name-input") as string,
        recipientEmail: formData.get("email-input") as string,
        recipientPhoneDetails: {
          countryCode: formData.get("contry-code-input") as string,
          phoneNumber: formData.get("phone-input") as string,
        },
      });
      console.log(giftCard);
      closeModal();
    } catch (error) {
      console.log("Error", error);
      closeModal();
    }
  }

  return (
    <main>
      <head>
        <title>ReCoin</title>
      </head>
      <body>
        <header className="header py-02 sticky top-0 flex items-center justify-between bg-white px-8 shadow-md">
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
        <div>
          <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex max-w-6xl flex-1 flex-col space-y-5 bg-gray-100 sm:mx-4 sm:my-2 sm:rounded-2xl sm:p-6 lg:flex-row lg:space-x-10 lg:space-y-0">
              {/* <!-- Content --> */}
              <div className="flex-1 px-2 sm:px-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-grey/50 text-3xl font-extralight">
                    All Gift Cards
                  </h3>
                </div>
                <div className="mb-10 mt-10 grid grid-cols-1 gap-4 sm:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* <!-- Cards --> */}
                  <div className="hover:smooth-hover group relative flex cursor-pointer flex-col items-center space-y-2 rounded-md bg-blue-500 px-4 py-10 hover:bg-blue-600/80 sm:py-20">
                    <img
                      className="h-20 w-20 rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="dancing"
                    />
                    <h4 className="text-center text-2xl font-bold capitalize text-white">
                      Dancing
                    </h4>
                    <p className="text-white/50">108 members</p>
                    <button
                      onClick={openModal}
                      className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                    >
                      <div className="absolute inset-0 w-3 bg-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white">
                        Purchase
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Exemplo de modal"
        >
          <div className="flex min-h-screen items-center justify-start bg-white">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="text-4xl font-medium">Purchase Gift Card</h1>

              <form onSubmit={handleSubmit} id="purchase" className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      id="name-input"
                      type="text"
                      name="name-input"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      id="email-input"
                      type="text"
                      name="email-input"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your email
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      id="quantity-input"
                      name="quantity-input"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Quantity
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      id="price-input"
                      name="price-input"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Price
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      id="contry-code-input"
                      type="text"
                      name="contry-code-input"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Contry Code
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      id="phone-input"
                      type="text"
                      name="phone-input"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Phone Number
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 rounded-md bg-black px-10 py-2 text-white"
                >
                  Purchase
                </button>
                <button
                  type="button"
                  className="mt-5 rounded-md bg-black px-10 py-2 text-white"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </body>
      <footer>{/* conteúdo do rodapé */}</footer>
    </main>
  );
}
