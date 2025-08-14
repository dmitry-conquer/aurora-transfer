import "../styles/main.scss";
import { Accordion } from "./components";

const initUIComponents = (): void => {
  new Accordion();
};

document.addEventListener("DOMContentLoaded", (): void => {
  initUIComponents();
});
