import { Select } from "./basic";

export const MySelect = ({ list, ...props }) => {
  return (
    <Select {...props}>
      {list.map(({ text, value }, i) => (
        <option key={i} value={value}>
          {" "}
          {text}
        </option>
      ))}
    </Select>
  );
};
