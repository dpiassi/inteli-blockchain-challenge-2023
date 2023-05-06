import type { V2_MetaFunction } from "@remix-run/node";
import GiftCards from "./giftCards";
import { Link } from "react-router-dom";


import { depositBTGUSD } from "~/blockchain";
import { useOptionalUser } from "~/utils";


export const meta: V2_MetaFunction = () => [{ title: "ReCoin" }];

export default function Index() {
  return (
    GiftCards
  );
}
