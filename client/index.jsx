import { hydrateRoot } from "react-dom/client";

import { App } from "./App";
const products = window.__INITIAL_DATA__;

hydrateRoot(document, <App products={products}/>);
