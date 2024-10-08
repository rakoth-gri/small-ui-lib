import { ThemeProvider } from "styled-components";
import { theme } from "./styled/theme";
// Components
import RingLoader from "react-spinners/RingLoader";
import { SiNextdotjs } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { IoMdSend } from "react-icons/io";
import Global from "./gui/global";
import {
  Text,
  Flex,
  Button,
  MyLink,
  Box,
  Image,
  Footer,
  Container,
  Icon,
} from "./gui/basic";
import { MyHeader } from "./gui/MyHeader";
import { MySelect } from "./gui/MySelect";
import { MyForm } from "./gui/MyForm";
import { MyTitle } from "./gui/MyTitle";
import { MyModal } from "./gui/MyModal";
import { MyMenu } from "./gui/MyMenu";
import { MyList } from "./gui/MyList";
import { MyError } from "./gui/MyError";
import { MyIconButton } from "./gui/MyIconButton";
import { MyCard } from "./gui/MyCard";
import { MyStyledSelect } from "./gui/MyStyledSelect";
import { MyLoadingButton } from "./gui/MyLoadingButton";
import { Tooltip } from "./gui/Tooltip";
// static files...
import ANIME from "./gui/assets/img/anime.webp";

import { UL_LIST, MENU_LIST, OPTIONS, FORM_LIST } from "./lists";

// Обязательно надо ставить точку с запятой после каждого правила ----

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <MyHeader justify="space-between">
        <Icon color="brown" fs="3em">
          <SiStyledcomponents />
        </Icon>
        <MyMenu
          list={MENU_LIST}
          fs="1.2em"
          ff="Montserrat"
          ls="3px"
          mr="0"
          br="8px"
          display="flex"

          // display='none'
        />
      </MyHeader>
      {/* <MyModal bgcolor='rgba(0,0,0,.75)' modal={true}>
        <MyForm list={FORM_LIST} w={"45%"} bgcolor='pink'/>
      </MyModal>  */}
      <Container fs="1.25rem">
        <MyList
          list={UL_LIST}
          w="50%"
          color="white"
          bgcolor="purple"
          fs="20px"
          ff="Montserrat"
          ls="0.7px"
          fw={300}
        />
        <MyTitle Tag="h1" ff="Roboto" br="0px" fw={700}>
          {" "}
          Hello{" "}
        </MyTitle>
        <Flex wrap="wrap" bgcolor="pink">
          <MyForm list={FORM_LIST} />
        </Flex>
        <Button
          disabled={false}
          display="flex"
          mr="0.5rem"
          fs={"2rem"}
          br="50%"
          ff="Roboto"
          fv="small-caps"
          ls="0.25rem"
          bgcolor="teal"
        >
          {" "}
          <SiNextdotjs />{" "}
        </Button>
        <MyLink
          to="https://www.ya.ru"
          target="_blanc"
          ff="Roboto"
          mr="0.5rem"
          color="whitesmoke"
          bgcolor="red"
          ls="0.06rem"
        >
          {" "}
          GO TO...
        </MyLink>
        <MySelect id="select" name="select" list={OPTIONS} ff={"Montserrat"} />
        <MyStyledSelect
          list={OPTIONS}
          ls="0.7px"
          bgcolor="teal"
          color="white"
          ff="Montserrat"
        />
        <Box w="350px">
          <Image alt="cover" className="image" />
        </Box>
      </Container>
      <Footer
        mr={"0px"}
        ff="Roboto"
        fw="300"
        wrap="wrap"
        align="center"
        ta="justify"
        ls="0.7px"
      >
        <Text w="45%">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          corrupti enim, voluptate laboriosam dolorum laudantium tenetur
          aliquid! Laborum itaque fugiat sint corporis aut illum dolores
          eligendi vel eveniet incidunt! Atque?
        </Text>
        <Text w="45%">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          corrupti enim, voluptate laboriosam dolorum laudantium tenetur
          aliquid! Laborum itaque fugiat sint corporis aut illum dolores
          eligendi vel eveniet incidunt! Atque? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Itaque corrupti enim, voluptate
          laboriosam dolorum laudantium tenetur aliquid! Laborum itaque fugiat
          sint corporis aut illum dolores eligendi vel eveniet incidunt! Atque?
        </Text>
      </Footer>
      <MyError display="block" mr="1rem">
        {" "}
        Ошибка обращения к серверу...
      </MyError>
      <MyIconButton color="purple" border="1px solid">
        {" "}
        <IoMdSend style={{ marginRight: "6px" }} /> My Icon Button{" "}
      </MyIconButton>
      <MyLoadingButton color="white" bgcolor="purple" ls='1.95px'>
        <RingLoader
          color={"white"}
          loading={false}
          cssOverride={{ margin: "0 0.5rem" }}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        Отправить
      </MyLoadingButton>
      <Tooltip text={'Вперед'} desc='На сторонний' ls='3px'/>
      <Tooltip text={'Назад'} desc='На предыдущий' ls='3px'/>
      <Tooltip text={'О нас'} desc='О компании' ls='3px'/>
      <Tooltip text={'Куда то'} desc='Не ходи туда' ls='3px'/>
      <MyCard
        info={2024}
        w="28%"
        bgcolor="black"
        border="10px"
        color="purple"
        ff="Montserrat"
        ls="0.8px"
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ipsa voluptas debitis, ipsam laborum maiores et voluptatum repellendus molestias tempora minus reprehenderit minima! Debitis facere maiores veniam a non dolores"
        }
        title="HELLO hui dfdfsd..."
        to={"https://ya.ru"}
        pd="0"
        src={ANIME}
      />      
    </ThemeProvider>
  );
}

export default App;
