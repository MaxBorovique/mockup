import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <div>
      <button onClick={themeHandler}>Switch Mode</button>
    </div>
  )
}