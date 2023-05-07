import React from 'react';
import { Popover, PopoverHandler, PopoverContent, Button } from '@material-tailwind/react';


interface PopupProps {
    content: any
}

const PopupComponent = ({ content }: PopupProps) => {
  return (
    <Popover>
      <PopoverHandler>
        <Button>Show Popover</Button>
      </PopoverHandler>
      <PopoverContent>
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default PopupComponent;
