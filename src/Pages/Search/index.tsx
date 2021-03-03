import React, { FormEvent, useEffect, useState } from "react";

import { Container } from "./styles";

import { cardService } from "../../services/cards";
import { Icard } from "../../interfaces";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar);

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<Icard[]>([]);
  const [cardName, setCardName] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await cardService.search(cardName);
        console.log(response.data.data);
        setCards(response.data.data);
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
      <h1>Pesquise aqui as cartas do seu arquétipo</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Digite o nome do seu card"
        />
      </form>

      <div className="grid">
        {cards.map((card) => (
          <figure key={card.id}>
            <FontAwesomeIcon icon={faStar} />
            <picture>
              {card.card_images.map((image) => (
                <img src={image.image_url} alt="" key={image.id} />
              ))}
            </picture>
            <figcaption>
              <div>
                <p>{card.desc}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
};

export default Search;
