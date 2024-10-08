import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { List, ListItem, Span, Box, Flex, Icon } from "./basic";

export const MyStyledSelect = ({ list, ...props }) => {
  const [state, setState] = useState({
    open: false,
    text: list[0].text,
    value: list[0].value,
  });

  const stateHandler = (e, value, text) => {
    if (e.target.tagName === "LI") {
      setState((p) => ({ ...p, text, value }));
    }
    setState((p) => ({ ...p, open: !p.open }));
  };

  return (
    <Flex
      direction="column"
      {...props}
      ta="left"
      justify="center"
      br="0.5rem 0.5rem 0 0"
    >
      <Flex        
        w="100%"
        mr="0px"
        display="flex"
        justify="space-between"
        style={{ cursor: "pointer" }}
        border="2px solid"
        onClick={stateHandler}
      >
        {state.text}{" "}
        <Icon fs="1.15em" mr="0">
          <MdArrowBackIos
            style={{
              transform: state.open ? "rotateZ(90deg)" : "rotateZ(270deg)",
            }}
          />
        </Icon>
      </Flex>
      <List
        display={state.open ? "flex" : "none"}
        direction="column"
        w="100%"
        mr="0px"
        br="0 0 0.5rem 0.5rem"
        pos="absolute"
        top="100%"
        left="0"
        bgcolor={props.bgcolor}
      >
        {list.map(({ value, text }, i) => (
          <ListItem
            key={value}
            color={state.value === value ? "brown" : null}
            w="100%"
            pd="0px"
            style={{ cursor: "pointer" }}
            onClick={(e) => stateHandler(e, value, text)}
          >
            {" "}
            {i + 1 + ". " + text}{" "}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
