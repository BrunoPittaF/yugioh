import React, { FormEvent, useEffect, useState } from "react";

import { Container } from "./styles";

import { cardService } from "../../services/cards";
import { Icard } from "../../interfaces";
const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<Icard[]>([]);
  const [cardName, setCardName] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await cardService.search(cardName);
        setCards(response.data.items);
        console.log(setCards(response));
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cardName]);

  async function handleFormSubmit(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();
      setCardName(search);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Tela de Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Digite o nome do seu card"
        />
      </form>

      <div className="grid">
        {/* {cards.map((card) => (
          <figure>
            <picture>
              <img
                src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                alt=""
              />
            </picture>
            <figcaption>
              <div key={card.level}>
                <p>{card.desc}</p>
              </div>
            </figcaption>
          </figure>
        ))} */}
      </div>
    </Container>
  );
};

export default Search;
