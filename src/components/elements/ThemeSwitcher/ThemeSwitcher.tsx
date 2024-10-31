import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "" ? "dark" : ""));
  };

  return (
    <div>
      <button onClick={themeHandler}>Switch Mode</button>
    </div>
  );
};
