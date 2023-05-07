import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import * as GiftCards from "./giftCards";

export const meta: V2_MetaFunction = () => [{ title: "ReCoin" }];

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
