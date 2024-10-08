import { Span } from "./basic";

export const MyTitle = ({ children, className, Tag, ...props }) => {
  return (
    <Tag className={`${className || ""}`}>
      <Span {...props} title>{children}</Span>
    </Tag>
  );
};
