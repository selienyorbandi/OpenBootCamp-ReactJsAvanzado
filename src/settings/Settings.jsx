import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const defaultConfig = {
  theme: "dark",
  lang: "es",
};

function Settings() {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  const handleClick = () => {
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: "ligth",
    }));
  };

  return (
    <div>
      <h1>App Settings</h1>
      <h2>Config actual:</h2>
      <p>
        Theme:
        {config.theme}
      </p>
      <p>
        Language:
        {config.lang}
      </p>
      <button type="button" onClick={handleClick}>
        Cambiar a modo claro
      </button>
    </div>
  );
}

export default Settings;
