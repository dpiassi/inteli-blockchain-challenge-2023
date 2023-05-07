import createOrder from "~/dao/createOrder";
import { Link, useParams } from "@remix-run/react";

export default function PurchaseForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const { id } = useParams();
    console.log(id);

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
      ;
    } catch (error) {
      console.log("Error", error);
      ;
    }

  }
  return (
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
          >
            <Link to= "/giftCards">Cancel</Link>
          </button>
        </form>
      </div>
    </div>
  );
}