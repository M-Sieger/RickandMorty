import { createElement } from "../utils/createElement";
import { Character } from "../utils/api";

export function createCard({
  imgSrc,
  name,
  status,
  species,
  origin,
}: Character) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__front",
        childs: [
          createElement("div", {
            className: "card__inner",
            childs: [
              createElement("img", {
                className: "card_portrait",
                src: imgSrc,
              }),
              createElement("h2", {
                className: "card_name",
                innerText: name,
              }),
              createElement("p", {
                innerText: `${status === "Alive" ? "🥳" : "☠"}`,
              }),
              createElement("p", {
                className: "card_species",
                innerText: species,
              }),
              createElement("p", {
                className: "card_origin",
                innerText: origin.name,
              }),
            ],
          }),
          createElement("div", {
            className: "card_back",
            childs: [
              createElement("p", {
                innerHTML: "Location TBA",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
