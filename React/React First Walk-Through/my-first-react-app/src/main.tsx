import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "easy-peasy";
import store from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
  // </StrictMode>
);
