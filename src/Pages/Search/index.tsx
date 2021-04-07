import React, { FormEvent, MouseEvent, useEffect, useState } from "react";

import { Container } from "./styles";

import { cardService } from "../../services/cards";
import { Icard } from "../../interfaces";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Cookies from "js-cookie";

library.add(faStar);

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<Icard[]>([]);
  const [cardName, setCardName] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(true);
  const [contador, setContador] = useState(0);

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
    let figure = e.currentTarget as HTMLImageElement;
    let color = e.currentTarget as HTMLElement;
    let favoriteCard = figure.lastElementChild!.lastElementChild!.getAttribute(
      "src"
    );
    if (favorite) {
      color.style.color = "red";
      setContador(contador + 1);
      Cookies.set(JSON.stringify(contador), JSON.stringify(favoriteCard));
    } else {
      color.style.color = "black";
      Cookies.remove("src");
    }
    setFavorite(!favorite);
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
            <figure onClick={teste}>
              <FontAwesomeIcon icon={faStar} />
              <picture>
                {card.card_images.map((image) => (
                  <img src={image.image_url} alt="" key={image.id} />
                ))}
              </picture>
            </figure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Search;
