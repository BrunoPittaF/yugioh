import React, { useState } from "react";
import { Container } from "./styles";

import { IrandomCard } from "../../interfaces";
import { randomService } from "../../services/randomCards";

const Home: React.FC = () => {
  const [randomCard, setRandomCard] = useState<IrandomCard>();

  function blockRandomCard() {
    randomService.randomCard().then((response) => {
      setRandomCard(response.data);
      console.log(response.data);
    });
  }

  return (
    <Container>

      <button onClick={blockRandomCard}>
        Clique para visualizar um card randômico
      </button>
      <figure>
        <picture>
          {
            randomCard?.card_images.map((image, small) => {
              return (
                <img src={image.image_url} alt="" />
              )
            })
          }
          
        </picture>
        <figcaption>
          <p>{randomCard?.desc}</p>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Home;
