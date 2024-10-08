import { List, ListItem } from "./basic";

export const MyList = ({ list, ...props }) => {
  return (
    <List {...props}>
      {list.map(({ text }, i) => (
        <ListItem key={i} pd="0.5rem" mr="0.5rem">
          {" "}
          {text}{" "}
        </ListItem>
      ))}
    </List>
  );
};
