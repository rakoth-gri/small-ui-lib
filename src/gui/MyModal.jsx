import { Flex } from "./basic";

export const MyModal = ({ children, ...props }) => {
  return <Flex {...props}>{children}</Flex>;
};
