import React, { useEffect, useState } from "react";
import * as JsonArray from "../../db.json";

export default function Favorites() {
  const [favoriteList, setFavoriteList] = useState<[]>([]);

  useEffect(() => {
    console.log(JsonArray.cards);
  }, [favoriteList]);

  return (
    <>
      <h1>Favorites</h1>
      <p>Bendito parenteses</p>
    </>
  );
}
