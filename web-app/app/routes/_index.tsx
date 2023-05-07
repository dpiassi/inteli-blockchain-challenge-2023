import type { V2_MetaFunction } from "@remix-run/node";
import GiftCards from "./giftCards";




export const meta: V2_MetaFunction = () => [{ title: "ReCoin" }];

export default function Index() {
  return (<
    GiftCards
  />);
}
