import { Form, Input } from "./basic";

export const MyForm = ({ list, ...props }) => {
  return (
    <Form {...props}>
      {list.map((item, i, arr) => (
        <Input
          {...item}
          key={i}
          border="1px solid"
          w="70%"
          className={i === arr.length - 1 && "submit"}
        />
      ))}
    </Form>
  );
};
