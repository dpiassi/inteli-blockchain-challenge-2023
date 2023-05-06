import type { V2_MetaFunction } from "@remix-run/node";
import GiftCards from "./giftCards";
import { Link } from "react-router-dom";


export const meta: V2_MetaFunction = () => [{ title: "ReCoin" }];

export default function Index() {
  return (
    GiftCards
  );
}
