import { useState } from "react";
import ColorsList from "./components/ColorsList";

const HEX = [
  "0",
  "1",
  "2",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function App() {
  const [colors, setColors] = useState([
    { a: "#504009", b: "#D0BFFF" },
    { a: "#A345BB", b: "#BFC777" },
    { a: "#D34EB4", b: "#AA1245" },
    { a: "#A345BB", b: "#ECDABD" },
    { a: "#332244", b: "#A1B2C3" },
  ]);

  const getColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.trunc(Math.random() * HEX.length);
      color += HEX[randomNumber];
    }
    return color;
  };

  const generateColor = () => {
    const newColors = [];
    for (let i = 0; i < colors.length; i++) {
      newColors.push({ a: getColor(), b: getColor() });
    }

    setColors(newColors);
  };

  return (
    <div>
      <h1 className="title">ColorsList</h1>
      <ColorsList colors={colors} />
      <button onClick={generateColor} className="button">
        Generate
      </button>
    </div>
  );
}

export default App;
