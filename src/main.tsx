import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const resetScrollPosition = () => {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  root.style.scrollBehavior = "auto";
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);

  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
};

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

resetScrollPosition();
window.addEventListener("pageshow", resetScrollPosition);
window.addEventListener(
  "load",
  resetScrollPosition,
  { once: true },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
