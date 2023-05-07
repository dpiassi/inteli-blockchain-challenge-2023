import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

interface PopupProps {
  content: any;
}

const PopupComponent = ({ content }: PopupProps) => {
    console.log(content)
    if(content.status == 200) {
        return (
            <Popover>
                <PopoverHandler>
                <Button>Show information</Button>
                </PopoverHandler>
                <PopoverContent>
                    <h4>{content.message}</h4>
                    <p>E-mail: {content.email}</p>
                    <p>Phone: {content.phone}</p>
                    <p>Transaction ID: {content.transactionId}</p>
                </PopoverContent>
            </Popover>
            );
    }
    return (
    <Popover>
        <PopoverHandler>
        <Button>Show Popover</Button>
        </PopoverHandler>
        <PopoverContent>{content.message}</PopoverContent>
    </Popover>
    );
};

export default PopupComponent;
