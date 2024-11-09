import React from "react";

function Input() {
  const [value, setValue] = React.useState("Pesquisa Google");
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        value
      )}`;
      window.open(searchUrl, "_blank");
      setValue("");
    }
  };
  return (
    <input
      type="text"
      className="border-rounded-full h-8 border-indigo-300 w-full p-2 bg-red-500 bg-opacity-50 rounded-full text-center focus:outline-none"
      onKeyDown={handleKeyDown}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => setValue("")}
      value={value}
    />
  );
}

export default Input;
