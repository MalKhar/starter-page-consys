import React from "react";
import { favoriteWebsites } from "./actions";

function Favorites() {
  return (
    <div className="flex flex-col gap-4 items-center align-items-center">
      <div className="grid mt-4 grid-cols-2 p-2 gap-4 bg-blue-700 bg-opacity-50 text-center justify-items-center rounded-lg w-full  align-center items-center">
        {favoriteWebsites.map(
          (website, index) =>
            index < 2 && (
              <div key={index}>
                <a href={website.url} target="_blank">
                  <h1 className="text-lg text-white bg-indigo-400 rounded-lg p-2 bg-opacity-50 w-28">
                    {website.name}
                  </h1>
                </a>
              </div>
            )
        )}
      </div>
      <div className="grid  grid-cols-3 p-4 gap-4 bg-blue-700 bg-opacity-50 text-center rounded-lg w-full  align-center items-center">
        {favoriteWebsites.map(
          (website, index) =>
            index >= 2 && (
              <div key={index}>
                <a href={website.url} target="_blank" rel="noopener noreferrer">
                  <h1 className="text-lg text-white bg-indigo-400 rounded-lg p-2 bg-opacity-50 w-28">
                    {website.name}
                  </h1>
                </a>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Favorites;
