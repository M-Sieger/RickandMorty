import { createElement } from "../utils/createElement";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("div", {
    className: "card",
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
        innerText: `${status === "Alive" ? "🥳" : "☠" }`,
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
  });
}





      





