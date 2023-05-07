import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import * as GiftCards from "./giftCards";

export const meta: V2_MetaFunction = () => [{ title: "stableshop • Buy Gift Cards using BTGUSD", description: "stableshop improves the usability of BTG Dol (a form of digital currency) into a payment product aimed at everyday use. Initially, a prepaid card structure called Gift Card will be developed to be used in digital stores. With this product, customers who wish to use BTG Dol for their purchases will be able to use our prepaid card wallet as a gift card. This solution will provide a convenient and affordable way for users to take advantage of BTG Dol in the context of everyday transactions." }];

// Loaders only run on the server and provide data
// to your component on GET requests
export const loader = async (args: LoaderArgs) => {
  return GiftCards.loader(args);
};

// Actions only run on the server and handle POST
// PUT, PATCH, and DELETE. They can also provide data
// to the component
export async function action(args: ActionArgs) {
  return GiftCards.action(args);
}

// The default export is the component that will be
// rendered when a route matches the URL. This runs
// both on the server and the client
export default function Index() {
  return GiftCards.default();
}
