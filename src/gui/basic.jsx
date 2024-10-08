import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import IMAGE from "./assets/img/fake.jpg";

const setPositionProps = (pos, top, left, right, bottom, zi) =>
  pos !== "static" && pos !== "relative" && pos
    ? `
          top: ${top || "unset"};
          left: ${left || "unset"};
          right: ${right || "unset"};
          bottom: ${bottom || "unset"};
          z-index: ${zi || 1};
        `
    : ``;

const setBasicProps = (
  theme,
  pd,
  mr,
  w,
  color,
  ff,
  fs,
  br,
  fv,
  ta,
  bgcolor,
  h,
  fw,
  border,
  ls
) => `
    padding: ${pd || theme?.padding?.xs};
    margin: ${mr || theme?.margin?.xs};
    width: ${w || "auto"};
    text-align: ${ta || "inherit"};
    color: ${color || "inherit"};
    font-family: ${ff || "inherit"};
    font-size: ${fs || "inherit"};
    height: ${h || "auto"};
    font-weight: ${fw || "inherit"};
    letter-spacing: ${ls || "inherit"};
    border-radius: ${br || theme?.padding?.xs};
    font-variant: ${fv || "normal"};
    background-color: ${bgcolor || "transparent"};
    border: ${border || "none"};  
  `;

// ! Text ---------------------------------

const Text = styled.p`
  position: relative;
  ${({
    theme,
    pd,
    mr,
    w,
    color,
    ff,
    fs,
    br,
    fv,
    ta,
    bgcolor,
    h,
    fw,
    ls,
    display,
    border,
  }) =>
    css`
      ${setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        display,
        ls
      )};
      display: ${display || "block"};
    `};

  &:hover {
    color: ${({theme}) => theme?.colors?.blue[500]};
  }

  /* &.last {
        color: #521313;
      } */

  /* & + & {
      background: lime;
    } */
`;

// ! INPUT ----------------------------------

const Input = styled.input.attrs(({ type, ...props }) => ({
  type: type || "text",
  ...props,
}))`
  outline: none;
  cursor: pointer;
  position: relative;
  ${({
    theme,
    pd,
    mr,
    wrap,
    display,
    w,
    h,
    color,
    ff,
    fs,
    br,
    border,
    bgcolor,
    fv,
    ta,
    fw,
    ls,
  }) =>
    css`
      ${setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
      flex-wrap: ${wrap || "nowrap"};
      display: ${display || "inline"};
    `};

  &.submit {
    background-color: ${({ theme }) => theme?.colors?.rose[400]};
    border: none;
    text-transform: uppercase;
    font-size: 0.85em;
    letter-spacing: 1px;
    color: ${({ theme }) => theme?.colors?.slate[200]};
    font-weight: 700;
    text-align: center;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.4;
    transition: 0.2s all ease;
  }

  /* &:last-child {
      background: red;   
    } */

  &:focus {
    &::placeholder {
      transform: scale(0);
      opacity: 0;
    }
  }

  &:disabled {
    opacity: 0.5;
    border: none;
  }

  @media (${({ theme }) => theme.screens.md}) {
    background: pink;
  }
`;

// ! Flex ----------------------------------------

const Flex = styled.section`
  ${({
    theme,
    modal,
    display,
    direction,
    align,
    justify,
    wrap,
    gap,
    w,
    br,
    pd,
    mr,
    ff,
    fs,
    color,
    bgcolor,
    border,
    h,
    fw,
    ls,
    pos,
    top,
    left,
    right,
    bottom,
    zi,
    fv,
    ta,
  }) =>
    css`
      ${() =>
        setBasicProps(
          theme,
          pd,
          mr,
          w,
          color,
          ff,
          fs,
          br,
          fv,
          ta,
          bgcolor,
          h,
          fw,
          border,
          ls
        )};
      display: ${display || "flex"};
      gap: ${gap || theme?.margin?.xs};
      flex-direction: ${direction || "row"};
      align-items: ${align || "center"};
      justify-content: ${justify || "center"};
      flex-wrap: ${wrap || "nowrap"};
      position: ${pos || "relative"};
      ${setPositionProps(pos, top, left, right, bottom, zi)};
      ${() =>
        modal
          ? css`
              position: fixed;
              top: 0px;
              left: 0px;
              width: 100vw;
              height: 100vh;
              margin: 0px;
              backdrop-filter: blur(1.5px);
              z-index: ${zi || 3};
            `
          : ""};
    `}

  @media (${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;

// ! Form -------------------------------------

const Form = styled.form`
  ${({
    theme,
    w,
    pd,
    mr,
    color,
    direction,
    bgcolor,
    br,
    wrap,
    ff,
    fs,
    fv,
    ta,
    border,
    h,
    fw,
    pos,
    ls,
    top,
    left,
    right,
    bottom,
    zi,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    position: ${pos || "relative"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
    ${() => {
      if (direction === "row") {
        return css`
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: row;
          flex-wrap: ${wrap || "nowrap"};
        `;
      } else {
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        `;
      }
    }};
  `};
`;

// ! Button -------------------------------------

const Button = styled.button.attrs((props) => ({
  ...props,
}))`
  cursor: pointer;
  text-transform: uppercase;
  ${({
    theme,
    display,
    pd,
    mr,
    w,
    h,
    color,
    ff,
    bgcolor,
    fs,
    br,
    wrap,
    border,
    align,
    justify,
    fv,
    fw,
    ls,
    pos,
    ta,
    top,
    left,
    right,
    bottom,
    zi,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    display: ${display || "inline"};
    align-items: ${align || "center"};
    justify-content: ${justify || "center"};
    flex-wrap: ${wrap || "nowrap"};
    position: ${pos || "relative"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
    &:hover {
      background-color: ${theme?.colors?.red[600]};
    }
  `};

  &:disabled {
    opacity: 0.5;
  }
`;

// ! Select ---------------------

const Select = styled.select.attrs(({ name, ...props }) => ({
  name: name || "select",
  ...props,
}))`
  outline: none;
  cursor: pointer;
  ${({
    theme,
    pd,
    mr,
    w,
    bgcolor,
    ff,
    color,
    fs,
    br,
    border,
    ls,
    h,
    fv,
    fw,
    ta,
    pos,
    top,
    left,
    right,
    bottom,
    zi,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    position: ${pos || "relative"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
    &:focus {
      color: ${theme?.colors?.red[400]};
    }
  `};

  &:disabled {
    opacity: 0.5;
    border: none;
  }
`;

// ! MyLink ------

const MyLink = styled(Link).attrs((props) => ({
  ...props,
}))`
  text-decoration: none;
  position: relative;
  ${({
    theme,
    display,
    pd,
    mr,
    w,
    h,
    color,
    ff,
    bgcolor,
    fs,
    wrap,
    align,
    justify,
    fv,
    ta,
    border,
    br,
    fw,
    ls,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    display: ${display || "inline"};
    align-items: ${align || "center"};
    justify-content: ${justify || "center"};
    flex-wrap: ${wrap || "nowrap"};
    &:hover {
      color: ${theme?.colors?.blue[500]};
    }

    &:visited {
      color: ${theme?.colors?.green[900]};
    }
  `};
`;

// ! Box ---------------------

const Box = styled.section`
  ${({
    theme,
    pd,
    mr,
    w,
    color,
    ff,
    bgcolor,
    ta,
    fs,
    br,
    border,
    h,
    fw,
    fv,
    ls,
    pos,
    top,
    left,
    right,
    bottom,
    zi,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    position: ${pos || "relative"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
  `};

  /* &:hover .image {
      visibility: visible;
    } */
`;

// ! Container -------------------

const Container = styled.main`
  position: "relative";
  ${({
    theme,
    pd,
    mr,
    w,
    fv,
    color,
    ff,
    bgcolor,
    ta,
    fs,
    br,
    border,
    h,
    fw,
    pos,
    ls,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
  `};

  /* &:hover .image {
      visibility: visible;
    } */
`;

// ! Header ---------------------

const Header = styled.header`
  position: relative;
  ${({
    display,
    theme,
    pd,
    mr,
    bgcolor,
    direction,
    align,
    justify,
    color,
    ff,
    wrap,
    fs,
    border,
    br,
    fv,
    fw,
    w,
    h,
    ta,
    ls,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    display: ${display || "flex"};
    flex-direction: ${direction || "row"};
    flex-wrap: ${wrap || "nowrap"};
    align-items: ${align || "center"};
    justify-content: ${justify || "center"};
  `}
`;

// ! Icon ---------------------

const Icon = styled.div`
  ${({
    theme,
    pd,
    mr,
    fs,
    color,
    pos,
    top,
    left,
    right,
    bottom,
    zi,
    w,
    h,
    border,
  }) => css`
    padding: ${pd || theme?.padding?.xs};
    margin: ${mr || theme?.margin?.xs};
    display: flex;
    color: ${color || "inherit"};
    align-items: center;
    justify-content: center;
    border: ${border || "none"};
    font-size: ${fs || "2em"};
    position: ${pos || "static"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
    top: ${top || "50%"};
    left: ${left || "50%"};
    width: ${w || "auto"};
    height: ${h || "auto"};
  `};
`;

// ! Footer ---------------------

const Footer = styled.footer`
  position: relative;
  ${({
    display,
    theme,
    pd,
    mr,
    bgcolor,
    direction,
    align,
    justify,
    color,
    ff,
    wrap,
    br,
    fv,
    fs,
    fw,
    w,
    h,
    border,
    ta,
    ls,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    display: ${display || "flex"};
    flex-direction: ${direction || "row"};
    flex-wrap: ${wrap || "nowrap"};
    align-items: ${align || "center"};
    justify-content: ${justify || "center"};
  `}
`;

// ! Image ---------------------------------------

const Image = styled.img.attrs(({ src, ...props }) => ({
  src: src || IMAGE,
  ...props,
}))`
  ${({
    w,
    h,
    of,
    br,
    theme,
    mr,
    pd,
    display,
    pos,
    top,
    left,
    right,
    bottom,
    zi,
  }) => css`
    width: ${w || "100%"};
    margin: ${mr || "0px"};
    padding: ${pd || "0px"};
    height: ${h || "auto"};
    object-fit: ${of || "cover"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
    position: ${pos || "relative"};
    border-radius: ${br || theme?.padding?.xs};
    display: ${display || "inline"};
  `};

  /* @media only screen and (max-width: 500px) {
      border-radius: 50%;
      padding: 3rem;
    } */
`;

// ! List ---------------------------------------

const List = styled.ul`
  user-select: none;
  ${({
    theme,
    pd,
    mr,
    w,
    h,
    color,
    direction,
    wrap,
    justify,
    align,
    ff,
    bgcolor,
    fs,
    fv,
    ta,
    br,
    lsp,
    lst,
    display,
    fw,
    pos,
    top,
    left,
    right,
    border,
    bottom,
    zi,
    ls,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    list-style-position: ${lsp || "inside"};
    list-style-type: ${lst || "disc"};
    position: ${pos || "relative"};
    display: ${display || "block"};
    flex-direction: ${direction || "row"};
    flex-wrap: ${wrap || "nowrap"};
    align-items: ${align || "center"};
    justify-content: ${justify || "center"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
  `};
`;

// ! ListItem ---------------------------------------

const ListItem = styled.li`
  position: relative;
  ${({
    theme,
    pd,
    mr,
    w,
    h,
    fv,
    color,
    ff,
    bgcolor,
    ta,
    border,
    fs,
    br,
    display,
    fw,
    ls,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    display: ${display || "block"};
  `};

  &.focus {
    color: ${({ theme }) => theme?.colors?.red[200]};
  }
`;

// ! Span -------------------------------------

const Span = styled.span`
  ${({
    theme,
    tooltip,
    error,
    title,
    pd,
    mr,
    w,
    h,
    color,
    ff,
    bgcolor,
    ta,
    fs,
    br,
    display,
    border,
    fw,
    fv,
    ls,
    pos,
    top,
    left,
    right,
    bottom,
    zi,
  }) => css`
    ${() =>
      setBasicProps(
        theme,
        pd,
        mr,
        w,
        color,
        ff,
        fs,
        br,
        fv,
        ta,
        bgcolor,
        h,
        fw,
        border,
        ls
      )};
    display: ${display || "inline"};
    position: ${pos || "relative"};
    ${setPositionProps(pos, top, left, right, bottom, zi)};
    ${() =>
      error &&
      css`
        color: ${theme?.colors?.rose[800]};
        opacity: 0.85;
        font-size: 1.2em;
        font-variant: small-caps;
      `};
    ${() =>
      title &&
      css`
        width: 100%;
        display: inline-block;
        text-align: ${ta || "center"};
      `};
    ${() =>
      tooltip &&
      css`
        font-weight: 700;
        letter-spacing: ${ls || "0.9px"};
        text-transform: uppercase;
        text-align: ${ta || "center"};
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.15);
        }
      `};
  `};
`;

export {
  ListItem,
  List,
  Image,
  Icon,
  Container,
  Header,
  Footer,
  Box,
  Flex,
  Text,
  Input,
  Button,
  Form,
  Select,
  MyLink,
  Span,
};
