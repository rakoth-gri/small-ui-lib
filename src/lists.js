const FORM_LIST = [
  {
    type: "text",
    placeholder: "name:",
    name: "text",
  },
  {
    type: null,
    placeholder: "phone:",
    name: "number",
  },
  {
    type: "submit",
    placeholder: null,
    name: "submit",
  },
];

const OPTIONS = [
  {
    value: "",
    text: "Выберите опцию:",
  },
  {
    value: "audio",
    text: "Стерео-Система",
  },
  {
    value: "def",
    text: "Защита картера",
  },
  {
    value: "hatch",
    text: "панорамное остекление",
  },
];

const MENU_LIST = [
  {
    to: "/",
    text: "Главная:",
  },
  {
    to: "https://ya.ru",
    text: "Яндекс",
  },
  {
    to: "https://mail.ru",
    text: "Мэйл.Ру",
  },
  {
    to: "https://youtube.com",
    text: "Ютуб+",
  },
  {
    to: "https://kinomania.ru",
    text: "Киномания",
  },
];

const UL_LIST = [{ text: "One" }, { text: "Two" }, { text: "Three" }];

export { UL_LIST, MENU_LIST, OPTIONS, FORM_LIST };
