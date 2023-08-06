import React from "react";

const Menu = () => {
  const menu = ["About", "Careers", "Events", "Products", "Support"];
  return (
    <header>
        <h1>loopstudios</h1>
      <nav>
        <ul>
          {menu.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
