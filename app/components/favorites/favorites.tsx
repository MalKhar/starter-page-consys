import React from "react";
import { favoriteWebsites } from "./actions";

function Favorites() {
  return (
    <div className="flex flex-col gap-4 items-center align-items-center">
      <div className="flex flex-row "></div>
      <div className="grid  grid-cols-2 gap-4 bg-blue-700 bg-opacity-50 text-center rounded-lg w-full h-14 align-center items-center">
        {favoriteWebsites.map((website, index) => (
          <div key={index}>
            <a href={website.url} target="_blank">
              <h1 className="text-2xl text-white">{website.name}</h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
