import React from "react";
import { Button } from "./basic";

export const MyIconButton = ({ children, ...props }) => {
  return (
    <Button {...props} display="flex" fw={700}>
      {children}
    </Button>
  );
};
