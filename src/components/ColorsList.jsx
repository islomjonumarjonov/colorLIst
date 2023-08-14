function ColorsList({ colors }) {
  const changeMainBg = (a, b) => {
    document.body.style.background = `linear-gradient(${Math.trunc(
      Math.random() * 360
    )}deg, ${a}, ${b})`;
  };

  return (
    <ul className="color-list">
      {colors.map((color, i) => {
        return (
          <li
            onClick={() => changeMainBg(color.a, color.b)}
            key={i}
            style={{
              background: `linear-gradient(${Math.trunc(
                Math.random() * 360
              )}deg,${color.a}, ${color.b})`,
            }}
          ></li>
        );
      })}
    </ul>
  );
}

export default ColorsList;
