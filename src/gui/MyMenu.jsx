import { List, ListItem, MyLink } from "./basic";

export const MyMenu = ({ list, w, ...props }) => {
      
  return (
    <nav style={{width: w}}>
      <List {...props}>
        {list.map(({ text, to }) => (
          <ListItem key={text} mr="0.5rem">
            <MyLink to={to}> {text}</MyLink>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
