import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Favorites() {
  const [favoriteList, setFavoriteList] = useState<[]>([]);

  useEffect(() => {
    setFavoriteList(Cookies.getJSON("value"));
    console.log(Cookies.get("key"));
  }, [favoriteList]);

  return (
    <>
      {console.log(favoriteList)}
      <h1>Favorites</h1>
      <p>Bendito parenteses</p>
    </>
  );
}
