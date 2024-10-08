import { Span } from "./basic";

export const MyError = ({ children, ...props }) => {
  return (
    <Span {...props} error="true">
      {children}
    </Span>
  );
};
