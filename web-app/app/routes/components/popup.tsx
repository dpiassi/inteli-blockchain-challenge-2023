import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@material-tailwind/react";
import { Link } from "@remix-run/react";

interface PopupProps {
  content: any;
}

const PopupComponent = ({ content }: PopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg px-8 py-6 shadow-md max-w-md w-full">
              {content.status === 200 ? (
                <>
                  <h4 className="text-lg font-bold mb-2">{content.message}</h4>
                  <p className="text-gray-700 mb-2">E-mail: {content.email}</p>
                  <p className="text-gray-700 mb-2">Phone: {content.phone}</p>
                  <p className="text-gray-700 mb-2">Transaction ID: {content.transactionId}</p>
                </>
              ) : (
                <>{content.message}</>
              )}
              <Button>
                <Link to="/">Close</Link>
              </Button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default PopupComponent;
