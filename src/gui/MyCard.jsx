import { Flex, Image, Text, Span, MyLink } from "./basic";
import { MyTitle } from "./MyTitle";

export const MyCard = ({ info, text, title, to, src, ...props }) => {
  return (
    <Flex {...props} display="block">
      <Image br="0.5rem 0.5rem 0 0" src={src} display="block" h="300px" />
      <MyTitle Tag="h3" mr="0.5rem 0px" ta="left" color="white">
        {title}
      </MyTitle>
      <Text ta="justify"> {text} </Text>
      <Flex justify="space-between" mr="0">
        <Span display="flex"> {info.toLocaleString()} </Span>
        <MyLink to={to} target="_blank">
          {" "}
          Подробнее{" "}
        </MyLink>
      </Flex>
    </Flex>
  );
};
