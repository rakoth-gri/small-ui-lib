import { Header } from "./basic";

export const MyHeader = ({ children, ...props }) => {
  return <Header {...props}>{children}</Header>;
};
