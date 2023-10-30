import React, { useState } from "react";

export default function ThemeToggleButton(props) {
  const [toggled, setToggled] = useState(false);

  const switchTheme = () => {
    document.querySelector("html").classList.toggle("coffee");
    setToggled(!toggled);
  };

  const randomId = `theme-toggle-button-${Math.random()}`; // since there are two menus: one for desktop and one for mobile

  return (
    <div className="theme-toggle-group">
      <label htmlFor={randomId} className="theme-toggle-label">
        Theme 🎨
      </label>
      <span className="theme-toggle">
        <div className="theme-toggle__border" />
        <input
          id={randomId}
          type="checkbox"
          role="checkbox"
          checked={toggled}
          aria-checked={toggled}
          onClick={switchTheme}
          className={`theme-toggle__switch ${toggled ? "toggled" : ""}`}
        />
      </span>
    </div>
  );
}
