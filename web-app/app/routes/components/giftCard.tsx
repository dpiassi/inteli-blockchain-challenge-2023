interface GiftCardProps {
  productId: number;
  productName: string;
  minRecipientDenomination: number | any;
}

const GiftCardComponent: React.FC<GiftCardProps> = ({
  productId,
  productName,
  minRecipientDenomination,
}) => {
  if (!productId) return <div />;
  return (
    <div>
      <h5>{productName}</h5>
      <p>Product ID: {productId}</p>
      <p>Minimal value: {minRecipientDenomination}</p>
    </div>
  );
};

export default GiftCardComponent;
