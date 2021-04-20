import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Favorites() {
  const [favoriteList, setFavoriteList] = useState<[]>([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setFavoriteList(favoriteList);
    console.log(localStorage.getItem(JSON.stringify(contador)));
    console.log(contador);
    Teste();
    console.log(localStorage.getItem(JSON.stringify(contador)));
    console.log(contador);
  }, [favoriteList]);

  function Teste() {
    setContador(contador + 1);
  }
  return (
    <>
      <h1>Favorites</h1>
      <p>Bendito parenteses</p>
    </>
  );
}
