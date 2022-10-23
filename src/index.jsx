/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { AppProvider } from "./components/Context";

render(() => 
   (
     <AppProvider>
      <App />
    </AppProvider>
    )
  ,
    document.getElementById("app")
);
