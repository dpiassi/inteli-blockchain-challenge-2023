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
        className="bg-[#ffffff] text-white-50 overflow-hidden rounded-md  p-2 min-h-[150px] flex flex-col"
      >
        <div>
          <h3 className="text-left pl-8 pb-4 pt-2 text-xl">
            {productName}
          </h3>
        </div>

        <div className="flex items-center justify-center bg-[#ffffff] min-h-[100px]">

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
  );
};

export default GiftCardComponent;
