import React from "react";
import { Button } from "./basic";

export const MyLoadingButton = ({ children,text, ...props }) => {
  return (
    <Button {...props} display="flex" fw={500}>
      {children}
      {text}
    </Button>
  );
};