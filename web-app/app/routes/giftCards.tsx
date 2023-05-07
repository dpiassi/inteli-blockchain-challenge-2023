import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Products from "./components/products";
import Header from "./components/header";

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

  return (
    <main>
      <head>
        <title>ReCoin</title>
      </head>
      <body>
        <Header />
        <Products />
      </body>
      <footer>{/* conteúdo do rodapé */}</footer>
    </main>
  );
}
