import "./cards_rm.css";
import { createCard } from "./cards_rm";
import { createElement } from "../utils/createElement";
import { getCharacter } from "../utils/api";



export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" }
    },
  ];
  // todo: display multiple characters based on `characters`. 
  // you can use `createElement` here to create a container.
  // don't forget to return the container. 




const container = createElement("div", {
  className: "container",
  childs: characters.map((character) => createCard(character)),
});


return container ;
}


  
export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
}

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(7),
  }),
];





  
