import React, { useState } from 'react';

export default function ThemeToggleButton(props) {
  const [ toggled, setToggled ] = useState(false);

  const switchTheme = () => {
    document.querySelector('html').classList.toggle('coffee');
    setToggled(!toggled);
  };

  return (
    <div class="theme-toggle-group">
      <label for="theme-toggle-button" class="theme-toggle-label">Theme</label>
      <span className="theme-toggle">
        <div className="theme-toggle__border" />
        <input
          id="theme-toggle-button"
          type="checkbox"
          role="checkbox"
          checked={toggled}
          aria-checked={toggled}
          role="switch"
          onClick={switchTheme} className={`theme-toggle__switch ${ toggled ? 'toggled' : ''}`}
        />
      </span>
    </div>
  );
};