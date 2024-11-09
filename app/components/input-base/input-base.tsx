import React from "react";

export default function InputBase() {
  const [value, setValue] = React.useState("Pesquisa na base de conhecimento");
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchUrl = `https://consys.movidesk.com/kb/pt-br/Search?q=${encodeURIComponent(
        value
      )}`;
      window.open(searchUrl, "_blank");
      setValue("");
    }
  };
  return (
    <input
      type="text"
      className="border-rounded-full border-blue-700 h-8 w-full p-2 bg-indigo-500 bg-opacity-50 rounded-full text-center focus:outline-none"
      onKeyDown={handleKeyDown}
      onFocus={() => setValue("")}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}
