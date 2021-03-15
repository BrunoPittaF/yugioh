import React, { FormEvent, MouseEvent, useEffect, useState } from "react";

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
  const [favorite, setFavorite] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await cardService.search(cardName);
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

  function teste(e: MouseEvent) {
    let teste = e.currentTarget as HTMLElement;
    console.log(favorite);
    if (teste.style.color === "red") {
      teste.style.color = "black";
    } else {
      teste.style.color = "red";
    }
    setFavorite(!favorite);
    console.log(favorite);
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
          <div className="favorite-card" key={card.id}>
            <FontAwesomeIcon
              icon={faStar}
              // className={favorite ? "active" : ""}
              onClick={teste}
            />
            <figure>
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
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Search;
