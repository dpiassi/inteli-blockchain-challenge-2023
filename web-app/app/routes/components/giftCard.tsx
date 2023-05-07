interface GiftCardProps {
  productId: number;
  productName: string;
  minRecipientDenomination: number | null;
  maxRecipientDenomination: number | null;
  logoUrls: Array<string>;
  brand: string;
  denomination: string;
  fixedRecipientDenominations: Array<number>;
  currency: string;
}

const GiftCardComponent: React.FC<GiftCardProps> = ({
  productId,
  productName,
  minRecipientDenomination,
  maxRecipientDenomination,
  brand,
  logoUrls,
  denomination,
  fixedRecipientDenominations,
  currency,
}) => {
  let showFixed = false;
  if (!productId) return <div />;
  if  (denomination == "FIXED") {
      showFixed = true;
  }
  return (
    <div className="flex flex-col items-center justify-center relative">

      <div
        id="partnerCard"
        className="bg-[#4682B4] text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col"
      >
        <div>
          <h3 className="text-left pl-8 pb-4 pt-2 text-xl">
            {productName}
          </h3>
        </div>

        <div className="flex items-center justify-center bg-[#4682B4]] min-h-[200px]">

          <img
            src={logoUrls[0]}
            alt="EasyCode"
            className="w-1/2 object-cover"
          />

        </div>
        <div className="grid grid-cols-4">
          <div className="p-4 pr-0 text-lg col-span-3">
            <p>
              Brand: {brand}
            </p>
           {!showFixed && <p>Range of Values:{currency} {maxRecipientDenomination} - {minRecipientDenomination}</p>}
           {showFixed && <p>Value:{currency} {fixedRecipientDenominations[0]}</p>}
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <h5>{productName}</h5>
    //   <p>Product ID: {productId}</p>
    //   <p>Minimal value: {minRecipientDenomination}</p>
    // </div>
  );
};

export default GiftCardComponent;
